import React, { useState } from "react";
import "./Card.css";
import HebrewTitle from "./HebrewTitle";
import FamilyNames from "./FamilyNames";
import AnnouncementText from "./AnnouncementText";
import CoupleNames from "./CoupleNames";
import ClosingText from "./ClosingText";
import EventDate from "./EventDate";
import EventLocation from "./EventLocation";
import MemoryPhrase from "./MemoryPhrase";
import LocationMap from "./LocationMap";
import RSVPForm from "./RSVPForm";
import LanguageToggle from "./LanguageToggle";
import MusicPlayer from "./MusicPlayer";
import { translations } from "../translations";

const Card = () => {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  return (
    <div className={`card ${lang === "he" ? "rtl" : ""}`}>
      <LanguageToggle lang={lang} setLang={setLang} />
      <MusicPlayer />
      <HebrewTitle text={t.hebrewTitle} />
      <FamilyNames
        leftFamily={t.familyNames.leftFamily}
        rightFamily={t.familyNames.rightFamily}
        memorial={t.familyNames.memorial}
        lang={lang}
      />
      <AnnouncementText lines={t.announcement} />
      <CoupleNames />
      <ClosingText lines={t.closing} />
      <EventDate lang={lang} dateHe={t.date} />
      <EventLocation venue={t.location.venue} address={t.location.address} />
      <p className={`houppa-info ${lang === "he" ? "rtl" : ""}`}>{t.houppa}</p>
      <MemoryPhrase text={t.memory} />
      <p className={`houppa-info ${lang === "he" ? "rtl" : ""}`}>{t.grandparents}</p>
      <LocationMap lang={lang} />
      {lang === "he" && <p className="welcome-text rtl">נשמח לראותכם</p>}
      <RSVPForm lang={lang} t={t.rsvp} />
    </div>
  );
};

export default Card;
