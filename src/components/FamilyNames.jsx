import React from "react";
import "./FamilyNames.css";

const FamilyNames = ({
  leftFamily = [
    "M. et Mme Daniel Klangowiks",
    "Mme Alexandra Cohen",
  ],
  rightFamily = ["Mme Clara Ohayon", "M. et Mme André Ohayon"],
  memorial = "A mon père Joël Cohen Z'l qui nous manque en ce jour unique",
  fontSize = "clamp(1.3rem, 4.6vw, 1.7rem)",
  fontWeight = "550",
  lang = "fr",
}) => {
  const fontFamily = lang === "he" ? "'Cardo', serif" : "'Cormorant Garamond', serif";

  return (
    <div className="family-names-wrapper" style={{ fontSize, fontFamily, fontWeight }}>
      <div className="family-names">
        <div
          className="family-column left"
          style={{ letterSpacing: "-0.02em" }}
        >
          {leftFamily.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="family-column right">
          {rightFamily.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      {memorial && (
        <p className="family-memorial">{memorial}</p>
      )}
    </div>
  );
};

export default FamilyNames;
