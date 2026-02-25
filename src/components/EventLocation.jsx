import React from "react";
import "./EventLocation.css";

const EventLocation = ({
  venue = "KEDMA",
  address = "Neve Ilan",
  fontFamily = "'Cormorant Garamond', serif",
}) => {
  return (
    <div className="event-location">
      <p className="venue" style={{ fontFamily }}>
        {venue}
      </p>
      <p className="address" style={{ fontFamily }}>
        {address}
      </p>
    </div>
  );
};

export default EventLocation;
