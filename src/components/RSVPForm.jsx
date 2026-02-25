import React, { useState } from "react";
import "./RSVPForm.css";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    attending: "",
    adults: 1,
    children: 0,
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Envoyer les données à un backend (Supabase, etc.)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rsvp-form">
        <div className="rsvp-success">
          <h3>Merci !</h3>
          <p>Votre réponse a bien été enregistrée.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rsvp-form">
      <h3 className="rsvp-title">Confirmez votre présence</h3>
      <form onSubmit={handleSubmit}>
        {/* Nom Prénom */}
        <div className="form-group">
          <label htmlFor="fullName">Nom et Prénom *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Votre nom complet"
          />
        </div>

        {/* Présence */}
        <div className="form-group">
          <label>Serez-vous présent(e) ? *</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === "yes"}
                onChange={handleChange}
                required
              />
              <span>Oui, avec joie !</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === "no"}
                onChange={handleChange}
              />
              <span>Malheureusement non</span>
            </label>
          </div>
        </div>

        {/* Nombre de personnes (si présent) */}
        {formData.attending === "yes" && (
          <>
            <div className="form-group">
              <label htmlFor="adults">Nombre d'adultes *</label>
              <input
                type="number"
                id="adults"
                name="adults"
                min="1"
                max="10"
                value={formData.adults}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="children">Nombre d'enfants (-6 ans)</label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                max="10"
                value={formData.children}
                onChange={handleChange}
              />
              <span className="form-hint">Optionnel</span>
            </div>
          </>
        )}

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message pour les mariés</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Un petit mot... (optionnel)"
            rows="3"
          />
        </div>

        {/* Bouton */}
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
