import React from "react";
import "./CoupleNames.css";

const CoupleNames = ({
  name1 = "Hannah",
  name2 = "Alan",
  hebrewName1 = "שמחה",
  hebrewName2 = "יצחק",
  mainFontSize = "clamp(2.1rem, 8vw, 2.9rem)",
  hebrewFontSize = "clamp(1.6rem, 4.5vw, 1.7rem)",
  mainFontFamily = "'Aniyah', cursive",
  hebrewFontFamily = "'Cardo', serif",
}) => {
  return (
    <div className="couple-names">
      <h2
        className="names-main"
        style={{
          fontSize: mainFontSize,
          fontFamily: mainFontFamily,
          letterSpacing: "-0.05em",
          fontWeight: "500",
        }}
      >
        {name1} & {name2}
      </h2>
      <div className="hebrew-names">
        <span
          className="hebrew-name"
          style={{ fontSize: hebrewFontSize, fontFamily: hebrewFontFamily }}
        >
          {hebrewName1}
        </span>
        <span
          className="hebrew-name"
          style={{ fontSize: hebrewFontSize, fontFamily: hebrewFontFamily }}
        >
          {hebrewName2}
        </span>
      </div>
    </div>
  );
};

export default CoupleNames;
