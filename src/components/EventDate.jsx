import React from "react";
import "./EventDate.css";

const EventDate = ({
  date = "Lundi 11 mai 2026",
  time = "17h",
  fontFamily = "'Cormorant Garamond', serif",
}) => {
  return (
    <div className="event-date">
      <p className="date" style={{ fontFamily }}>
        {date}
      </p>
      <p className="time" style={{ fontFamily }}>
        à {time}
      </p>
    </div>
  );
};

export default EventDate;
