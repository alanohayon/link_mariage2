import React from 'react'
import './FamilyNames.css'

const FamilyNames = ({
  leftFamily = [
    "M. & Mme Daniel Klangowiks",
    "Mme Alexandra Cohen",
    "A mon père Joël Cohen Z'l qui",
    "nous manque en ce jour unique"
  ],
  rightFamily = [
    "Mme Clara Ohayon",
    "M. & Mme André Ohayon"
  ],
  fontSize = "1rem",
  fontFamily = "'Cormorant Garamond', serif"
}) => {
  return (
    <div className="family-names">
      <div
        className="family-column left"
        style={{ fontSize, fontFamily }}
      >
        {leftFamily.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div
        className="family-column right"
        style={{ fontSize, fontFamily }}
      >
        {rightFamily.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default FamilyNames
