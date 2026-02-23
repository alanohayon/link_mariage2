import React from 'react'
import './Card.css'
import HebrewTitle from './HebrewTitle'
import MainTitle from './MainTitle'
import FamilyNames from './FamilyNames'
import AnnouncementText from './AnnouncementText'
import CoupleNames from './CoupleNames'
import ClosingText from './ClosingText'
import fondCarte from '../../assets/Fond_carte.png'

const Card = () => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${fondCarte})` }}
    >
      <HebrewTitle />
      <MainTitle />
      <FamilyNames />
      <AnnouncementText />
      <CoupleNames />
      <ClosingText />
    </div>
  )
}

export default Card
