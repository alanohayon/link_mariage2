import React from "react";
import "./LocationMap.css";

const LocationMap = ({
  // Coordonnées de KEDMA Neve Ilan
  wazeUrl = "https://waze.com/ul?ll=31.8097,35.0722&navigate=yes",
  googleMapsUrl = "https://maps.google.com/?q=31.8097,35.0722",
  lang = "fr",
}) => {
  const wazeText = lang === "he" ? "פתח ב-Waze" : "Ouvrir dans Waze";
  return (
    <div className="location-map">
      {/* <div className="map-embed">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1sd6ZzNyi7L9-SkFQE8TOWLgYDnBJSPc"
          title="Plan d'accès au mariage"
          allowFullScreen
          loading="lazy"
        />
      </div> */}
      <div className="map-buttons">
        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-button waze"
        >
          <svg viewBox="0 0 48 48" className="waze-icon">
            <path fill="#37474f" d="M27,38C9.1,38,5.2,33.2,3.6,31.1c-0.4-0.4-0.6-1-0.6-1.6C3,28.1,4.1,27,5.5,27C6.4,27,9,27,9,22.1 v-0.6C9,12.4,17.1,5,27,5s18,7.4,18,16.5S36.9,38,27,38z" />
            <path fill="#fff" d="M27,36c8.8,0,16-6.5,16-14.5S35.8,7,27,7s-16,6.5-16,14.5v0.6c0,6.2-3.8,6.9-5.5,6.9 C5.2,29,5,29.2,5,29.5c0,0.1,0,0.2,0.1,0.3C6.6,31.7,10,36,27,36z" />
            <path fill="#37474f" d="M32 16A2 2 0 1 0 32 20 2 2 0 1 0 32 16zM22 16A2 2 0 1 0 22 20 2 2 0 1 0 22 16zM27 29c-4.8 0-6.7-3.5-7-5.3-.1-.5.3-1.1.8-1.2.5-.1 1.1.3 1.2.8 0 .1.7 3.7 5 3.7 4.3 0 5-3.5 5-3.7.1-.5.6-.9 1.2-.8.5.1.9.6.8 1.1C33.7 25.5 31.8 29 27 29z" />
          </svg>
          {wazeText}
        </a>
      </div>
    </div>
  );
};

export default LocationMap;
