import React, { useState } from "react";
import "./RSVPForm.css";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
        headers: { "Content-Type": "application/json" },
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
      setError("Une erreur est survenue. Veuillez réessayer.");
      console.error("RSVP submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`rsvp-form ${lang === "he" ? "rtl" : ""}`}>
        <div className="rsvp-success">
          <h3>{t.successTitle}</h3>
          <p>{t.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rsvp-form ${lang === "he" ? "rtl" : ""}`}>
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
          <label htmlFor="fullName">{t.fullName}</label>
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
          <label>{t.attending}</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="attending"
                value="Oui"
                checked={formData.attending === "Oui"}
                onChange={handleChange}
                required
              />
              <span>{t.yes}</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="attending"
                value="Non"
                checked={formData.attending === "Non"}
                onChange={handleChange}
              />
              <span>{t.no}</span>
            </label>
          </div>
        </div>

        {/* Nombre de personnes (si présent) */}
        {formData.attending === "Oui" && (
          <>
            <div className="form-group">
              <label htmlFor="adults">{t.adults}</label>
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
              <label htmlFor="children">{t.children}</label>
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

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">{t.email}</label>
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

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">{t.message}</label>
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
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? t.submitting : t.submit}
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
