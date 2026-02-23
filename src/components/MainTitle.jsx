import React from 'react'
import './MainTitle.css'

const MainTitle = ({
  text = "Houppa & Soirée",
  fontSize = "3.5rem",
  fontFamily = "'Great Vibes', cursive"
}) => {
  return (
    <h1
      className="main-title"
      style={{ fontSize, fontFamily }}
    >
      {text}
    </h1>
  )
}

export default MainTitle
