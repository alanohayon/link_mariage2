import React from "react";
import "./EventDate.css";

const EventDate = ({
  date = "Lundi 11 mai 2026",
  time = "17h",
}) => {
  return (
    <div className="event-date">
      <p className="date">{date}</p>
      <p className="time">à {time}</p>
    </div>
  );
};

export default EventDate;
