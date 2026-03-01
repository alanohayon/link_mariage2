import React from "react";
import "./CoupleNames.css";

const CoupleNames = ({
  name1 = "Hannah",
  name2 = "Alan",
  hebrewName1 = "שמחה",
  hebrewName2 = "יצחק",
  mainFontSize = "clamp(2.0rem, 7vw, 2.8rem)",
  hebrewFontSize = "clamp(1.0rem, 3.5vw, 1.2rem)",
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
