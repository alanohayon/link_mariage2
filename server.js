import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { google } from "googleapis";
import { Client as NotionClient } from "@notionhq/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;
const DIST_DIR = path.join(__dirname, "dist");

const {
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_NAME,
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_PRIVATE_KEY,
  NOTION_TOKEN,
  NOTION_DATABASE_ID,
} = process.env;

const isPlaceholder = (v) => !v || v.startsWith("__REPLACE_ME");
const credsReady =
  !isPlaceholder(GOOGLE_SHEET_ID) &&
  !isPlaceholder(GOOGLE_SHEET_NAME) &&
  !isPlaceholder(GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
  !isPlaceholder(GOOGLE_PRIVATE_KEY) &&
  !isPlaceholder(NOTION_TOKEN) &&
  !isPlaceholder(NOTION_DATABASE_ID);

let sheetsClient = null;
let notionClient = null;

if (credsReady) {
  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  sheetsClient = google.sheets({ version: "v4", auth });
  notionClient = new NotionClient({ auth: NOTION_TOKEN });
}

const app = express();

// Le front envoie text/plain pour bypass CORS preflight (héritage n8n).
// On accepte les deux.
app.use(express.json({ limit: "32kb" }));
app.use(express.text({ type: "text/plain", limit: "32kb" }));

const parseBody = (req) => {
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return req.body || null;
};

const appendSheet = async (data) => {
  const row = [
    data.fullName,
    data.attending,
    data.adults,
    data.children,
    data.email,
    data.message,
    data.submittedAt,
  ];
  await sheetsClient.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: `${GOOGLE_SHEET_NAME}!A:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
};

const createNotionPage = async (data) => {
  await notionClient.pages.create({
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      "Nom Complet": {
        title: [{ text: { content: data.fullName || "" } }],
      },
      Present: {
        rich_text: [{ text: { content: data.attending || "" } }],
      },
      Adultes: { number: Number(data.adults) || 0 },
      Enfants: { number: Number(data.children) || 0 },
      Email: { email: data.email || null },
      Message: {
        rich_text: [{ text: { content: data.message || "" } }],
      },
    },
  });
};

app.post("/api/rsvp", async (req, res) => {
  if (!credsReady) {
    console.error("[RSVP] credentials manquantes ou placeholders");
    return res.status(503).json({ error: "service_unavailable" });
  }

  const data = parseBody(req);
  if (!data || typeof data !== "object") {
    return res.status(400).json({ error: "invalid_body" });
  }

  // Honeypot anti-spam : si rempli => bot, on retourne 200 silencieusement
  if (data.website && data.website.length > 0) {
    return res.status(200).json({ ok: true });
  }

  if (!data.fullName || !data.attending) {
    return res.status(400).json({ error: "missing_fields" });
  }

  const payload = {
    fullName: String(data.fullName).slice(0, 200),
    attending: String(data.attending).slice(0, 10),
    adults: Number(data.adults) || 0,
    children: Number(data.children) || 0,
    email: data.email ? String(data.email).slice(0, 200) : "",
    message: data.message ? String(data.message).slice(0, 2000) : "",
    submittedAt: new Date().toISOString(),
  };

  // On lance les deux en parallèle. Si l'un échoue, l'autre passe quand même
  // — un RSVP perdu côté Notion mais sauvé côté Sheet est mieux que tout perdre.
  const [sheetResult, notionResult] = await Promise.allSettled([
    appendSheet(payload),
    createNotionPage(payload),
  ]);

  const sheetOk = sheetResult.status === "fulfilled";
  const notionOk = notionResult.status === "fulfilled";

  if (!sheetOk) console.error("[RSVP] Sheets failed:", sheetResult.reason?.message);
  if (!notionOk) console.error("[RSVP] Notion failed:", notionResult.reason?.message);

  if (!sheetOk && !notionOk) {
    return res.status(500).json({ error: "both_failed" });
  }

  return res.status(200).json({ ok: true, sheet: sheetOk, notion: notionOk });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, credsReady });
});

// Sert le build Vite (dist) en production
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`[server] listening on :${PORT} | credsReady=${credsReady}`);
});
