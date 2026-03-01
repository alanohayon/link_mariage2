import React, { useState, useEffect } from "react";
import "./HebrewTitle.css";

const HebrewTitle = ({
  text = "קול ששון וקול שמחה קול חתן וקול כלה",
  fontFamily = "'Cardo', serif",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  // Mobile Safari rend les caractères de gauche à droite sur textPath,
  // on inverse la chaîne pour que la lecture RTL soit correcte
  const displayText = isMobile
    ? [...text].reverse().join("")
    : text;

  return (
    <div className="hebrew-title-container">
      <svg
        className="hebrew-title-svg"
        viewBox="0 0 500 80"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id="curve"
            d="M 15,65 Q 250,-21 485,65"
            fill="none"
          />
        </defs>
        <text
          className="hebrew-title-text"
          fontSize="22"
          fontFamily={fontFamily}
        >
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {displayText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default HebrewTitle;
