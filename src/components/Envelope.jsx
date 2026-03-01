import React, { useState } from "react";
import "./Envelope.css";

const Envelope = ({ onOpen }) => {
  const [phase, setPhase] = useState("closed"); // closed | opening | vanishing

  const handleTap = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    // Après l'animation d'ouverture (1.8s), lancer la disparition
    setTimeout(() => setPhase("vanishing"), 1800);
    // Après la disparition (1s), afficher la carte
    setTimeout(() => onOpen(), 2800);
  };

  return (
    <div className="envelope-container" onClick={handleTap}>
      <div className={`envelope envelope--${phase}`}>
        {/* Lueur divine derrière l'enveloppe */}
        <div className="envelope__glow" />

        {/* Rabat (flap) -- pivote vers l'arriere a l'ouverture */}
        <img
          src="/images/enveloppe_haut.webp"
          alt=""
          className="envelope__flap"
        />

        {/* Bas de l'enveloppe -- reste en place, transparent */}
        <img
          src="/images/enveloppe_bas.webp"
          alt=""
          className="envelope__bottom"
        />

      </div>
    </div>
  );
};

export default Envelope;
