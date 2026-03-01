import React from "react";
import "./HebrewTitle.css";

const HebrewTitle = ({
  text = "קול ששון וקול שמחה קול חתן וקול כלה",
  fontSize = "26px",
  fontFamily = "'Cardo', serif",
}) => {
  return (
    <div className="hebrew-title-container">
      <svg
        className="hebrew-title-svg"
        viewBox="0 0 400 60"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Chemin dessiné de droite à gauche pour correspondre au sens de lecture de l'hébreu */}
          <path
            id="curve"
            d="M 390,40 Q 200,-5 10,40"
            fill="transparent"
          />
        </defs>
        <text
          className="hebrew-title-text"
          style={{ fontSize, fontFamily }}
          direction="rtl"
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default HebrewTitle;
