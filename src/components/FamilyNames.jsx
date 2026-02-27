import React from "react";
import "./FamilyNames.css";

const FamilyNames = ({
  leftFamily = [
    "M. et Mme",
    "Daniel Klangowiks",
    "Mme Alexandra Cohen",
    "A mon père Joël Cohen Z'l qui",
    "nous manque en ce jour unique",
  ],
  rightFamily = ["Mme Clara Ohayon", "M. et Mme André Ohayon"],
  fontSize = "clamp(1.1rem, 3.5vw, 1.3rem)",
  fontFamily = "'Edwardian Script ITC', cursive",
  fontWeight = "550",
}) => {
  return (
    <div className="family-names">
      <div
        className="family-column left"
        style={{ fontSize, fontFamily, fontWeight, letterSpacing: "-0.02em" }}
      >
        {leftFamily.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div
        className="family-column right"
        style={{ fontSize, fontFamily, fontWeight }}
      >
        {rightFamily.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default FamilyNames;
