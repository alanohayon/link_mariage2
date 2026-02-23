import React from 'react'
import './AnnouncementText.css'

const AnnouncementText = ({
  lines = [
    "Ont la joie de vous faire part du",
    "mariage de leurs petits enfants et enfants"
  ],
  fontSize = "1.1rem",
  fontFamily = "'Cormorant Garamond', serif"
}) => {
  return (
    <div
      className="announcement-text"
      style={{ fontSize, fontFamily }}
    >
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}

export default AnnouncementText
