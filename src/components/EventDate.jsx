import React from "react";
import "./EventDate.css";

const EventDate = ({
  date = "Lundi 11 mai 2026",
  dateHe = "11/05/26",
  dateHeb = "כ״ד אייר תשפ״ו",
  time = "17h00",
  lang = "fr",
}) => {
  const displayDate = lang === "he" ? dateHe : date;

  return (
    <div className={`event-date ${lang === "he" ? "rtl" : ""}`}>
      <p className="date">{displayDate}</p>
      <p className="date-heb">{dateHeb}</p>
      {lang === "he" ? (
        <>
          <p className="time">חופה וקידושין</p>
          <p className="time">17:00</p>
        </>
      ) : (
        <p className="time">à {time}</p>
      )}
    </div>
  );
};

export default EventDate;
