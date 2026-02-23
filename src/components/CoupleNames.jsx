import React from 'react'
import './CoupleNames.css'

const CoupleNames = ({
  name1 = "Hannah",
  name2 = "Alan",
  hebrewName1 = "שמחה",
  hebrewName2 = "יצחק",
  mainFontSize = "4rem",
  hebrewFontSize = "1.5rem",
  mainFontFamily = "'Great Vibes', cursive",
  hebrewFontFamily = "'Frank Ruhl Libre', serif"
}) => {
  return (
    <div className="couple-names">
      <h2
        className="names-main"
        style={{ fontSize: mainFontSize, fontFamily: mainFontFamily }}
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
  )
}

export default CoupleNames
