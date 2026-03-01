import React from "react";
import "./ClosingText.css";

const ClosingText = ({
  lines = [
    "Et seront honorés de votre présence à la Houpa qui sera célébrée le",
  ],
}) => {
  return (
    <div className="closing-text">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default ClosingText;
