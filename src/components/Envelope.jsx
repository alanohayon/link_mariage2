import React, { useState } from "react";
import "./Envelope.css";

const Envelope = ({ onOpen }) => {
  const [phase, setPhase] = useState("closed"); // closed | opening | revealing

  const handleTap = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    setTimeout(() => setPhase("revealing"), 900);
    setTimeout(() => onOpen(), 2200);
  };

  return (
    <div className="envelope-container" onClick={handleTap}>
      <div className={`envelope envelope--${phase}`}>
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

        {/* Indication de tap */}
        <p className="envelope__hint">Appuyez pour ouvrir</p>
      </div>
    </div>
  );
};

export default Envelope;
