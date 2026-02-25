import React from "react";
import "./Card.css";
import HebrewTitle from "./HebrewTitle";
import FamilyNames from "./FamilyNames";
import AnnouncementText from "./AnnouncementText";
import CoupleNames from "./CoupleNames";
import ClosingText from "./ClosingText";
import EventDate from "./EventDate";
import EventLocation from "./EventLocation";
import MemoryPhrase from "./MemoryPhrase";
import Programme from "./Programme";
import LocationMap from "./LocationMap";
import RSVPForm from "./RSVPForm";
import fondCarte from "../../assets/Fond_carte.png";

const Card = () => {
  return (
    <>
      {/* Fond fixe qui couvre tout l'écran (fix iOS) */}
      <div
        className="card-background"
        style={{ backgroundImage: `url(${fondCarte})` }}
      />
      {/* Contenu scrollable */}
      <div className="card">
        <HebrewTitle />
        <FamilyNames />
        <AnnouncementText />
        <CoupleNames />
        <ClosingText />
        <EventDate />
        <EventLocation />
        <MemoryPhrase />
        <Programme />
        <LocationMap />
        <RSVPForm />
      </div>
    </>
  );
};

export default Card;
