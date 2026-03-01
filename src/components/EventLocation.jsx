import React from "react";
import "./EventLocation.css";

const EventLocation = ({
  venuePrefix = "Dans les salons",
  venueName = "Kedma",
  address = "Neve Ilan",
}) => {
  return (
    <div className="event-location">
      <p className="venue">
        <span className="venue-prefix">{venuePrefix}</span>{" "}
        <span className="venue-name">{venueName}</span>
      </p>
      <p className="address">{address}</p>
    </div>
  );
};

export default EventLocation;
