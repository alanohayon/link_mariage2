import React from "react";
import "./LanguageToggle.css";

const LanguageToggle = ({ lang, setLang }) => {
  const toggleLang = () => {
    setLang(lang === "fr" ? "he" : "fr");
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLang}
      aria-label={lang === "fr" ? "Passer en hébreu" : "לעבור לצרפתית"}
    >
      <span className="flag">{lang === "fr" ? "🇮🇱" : "🇫🇷"}</span>
    </button>
  );
};

export default LanguageToggle;
