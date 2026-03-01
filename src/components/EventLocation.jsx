import React from "react";
import "./EventLocation.css";

const EventLocation = ({
  venue = "KEDMA",
  address = "Neve Ilan",
}) => {
  return (
    <div className="event-location">
      <p className="venue">{venue}</p>
      <p className="address">{address}</p>
    </div>
  );
};

export default EventLocation;
