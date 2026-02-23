import React from 'react'
import './ClosingText.css'

const ClosingText = ({
  lines = [
    "Et seront honorés de votre présence à la Houpa",
    "qui sera célébrée le"
  ],
  fontSize = "1.1rem",
  fontFamily = "'Cormorant Garamond', serif"
}) => {
  return (
    <div
      className="closing-text"
      style={{ fontSize, fontFamily }}
    >
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}

export default ClosingText
