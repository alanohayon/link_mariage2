import React from 'react'
import './HebrewTitle.css'

const HebrewTitle = ({
  text = "קול ששון וקול שמחה, קול חתן וקול כלה",
  fontSize = "1.4rem",
  fontFamily = "'Frank Ruhl Libre', serif"
}) => {
  return (
    <div
      className="hebrew-title"
      style={{ fontSize, fontFamily }}
    >
      {text}
    </div>
  )
}

export default HebrewTitle
