import React from "react";
import "./ClosingText.css";

const ClosingText = ({
  lines = [
    "Et seront honorés de votre présence à la Houpa qui sera célébrée le",
  ],
  fontSize = "clamp(1.6rem, 3.9vw, 1.6rem)",
  fontFamily = "'Cormorant Garamond', serif",
}) => {
  return (
    <div className="closing-text" style={{ fontSize, fontFamily }}>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default ClosingText;
