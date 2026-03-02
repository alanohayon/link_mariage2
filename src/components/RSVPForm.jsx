import { useState } from "react";
import {
  User,
  Heart,
  CircleCheck,
  CircleX,
  Users,
  Baby,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import "./RSVPForm.css";

const LiquidGlassFilter = () => (
  <svg
    style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    aria-hidden="true"
  >
    <defs>
      <filter id="liquid-glass" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.01"
          numOctaves="3"
          seed="42"
          stitchTiles="stitch"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="20"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

const defaultT = {
  title: "Confirmez votre présence",
  fullName: "Nom et Prénom *",
  fullNamePlaceholder: "Votre nom complet",
  attending: "Serez-vous présent(e) ? *",
  yes: "Oui, avec joie !",
  no: "Malheureusement non",
  adults: "Nombre d'adultes *",
  children: "Nombre d'enfants (-6 ans)",
  optional: "Optionnel",
  email: "Email *",
  emailPlaceholder: "votre@email.com",
  message: "Message pour les mariés",
  messagePlaceholder: "Un petit mot... (optionnel)",
  submit: "Envoyer",
  submitting: "Envoi en cours...",
  successTitle: "Merci !",
  successMessage: "Votre réponse a bien été enregistrée.",
  error: "Une erreur est survenue. Veuillez réessayer.",
};

const RSVPForm = ({ lang = "fr", t = defaultT }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    attending: "",
    adults: 1,
    children: 0,
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "attending" && value === "Non" ? { email: "" } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;
    setLoading(true);
    setError("");

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error("Webhook URL non configuree");
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        // "text/plain" évite la preflight OPTIONS → contourne le CORS n8n
        // n8n reçoit et parse le JSON correctement dans les deux cas
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          ...formData,
          adults: Number(formData.adults) || 1,
          children: Number(formData.children) || 0,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch (err) {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rsvp-form ${lang === "he" ? "rtl" : ""}`}>
      <LiquidGlassFilter />
      <div className="glass-refraction-layer" aria-hidden="true" />
      <div className="glass-content">
        {submitted ? (
          <div className="rsvp-success">
            <h3>{t.successTitle}</h3>
            <p>{t.successMessage}</p>
          </div>
        ) : (
          <>
            <h3 className="rsvp-title">{t.title}</h3>
            <form onSubmit={handleSubmit}>
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Nom Prénom */}
              <div className="form-group">
                <label htmlFor="fullName">
                  <User size={16} strokeWidth={1.8} className="field-icon" />
                  {t.fullName}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder={t.fullNamePlaceholder}
                />
              </div>

              {/* Présence */}
              <div className="form-group">
                <label>
                  <Heart size={16} strokeWidth={1.8} className="field-icon" />
                  {t.attending}
                </label>
                <div className="radio-group">
                  <label
                    className={`radio-label ${formData.attending === "Oui" ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="Oui"
                      checked={formData.attending === "Oui"}
                      onChange={handleChange}
                      required
                    />
                    <span className="radio-custom">
                      <CircleCheck size={18} strokeWidth={2} />
                    </span>
                    <span className="radio-text">{t.yes}</span>
                  </label>
                  <label
                    className={`radio-label ${formData.attending === "Non" ? "selected" : ""}`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      value="Non"
                      checked={formData.attending === "Non"}
                      onChange={handleChange}
                    />
                    <span className="radio-custom">
                      <CircleX size={18} strokeWidth={2} />
                    </span>
                    <span className="radio-text">{t.no}</span>
                  </label>
                </div>
              </div>

              {/* Nombre de personnes (si présent) */}
              {formData.attending === "Oui" && (
                <>
                  <div className="form-group">
                    <label htmlFor="adults">
                      <Users
                        size={16}
                        strokeWidth={1.8}
                        className="field-icon"
                      />
                      {t.adults}
                    </label>
                    <input
                      type="number"
                      id="adults"
                      name="adults"
                      min="1"
                      max="20"
                      value={formData.adults}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="children">
                      <Baby
                        size={16}
                        strokeWidth={1.8}
                        className="field-icon"
                      />
                      {t.children}
                    </label>
                    <input
                      type="number"
                      id="children"
                      name="children"
                      min="0"
                      max="20"
                      value={formData.children}
                      onChange={handleChange}
                    />
                    <span className="form-hint">{t.optional}</span>
                  </div>
                </>
              )}

              {/* Email - seulement si "Oui" */}
              {formData.attending === "Oui" && (
                <div className="form-group">
                  <label htmlFor="email">
                    <Mail
                      size={16}
                      strokeWidth={1.8}
                      className="field-icon"
                    />
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              )}

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare
                    size={16}
                    strokeWidth={1.8}
                    className="field-icon"
                  />
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows="3"
                />
              </div>

              {/* Erreur */}
              {error && <p className="rsvp-error">{t.error}</p>}

              {/* Bouton */}
              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? (
                  t.submitting
                ) : (
                  <>
                    <Send size={16} strokeWidth={2} />
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RSVPForm;
