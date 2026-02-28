import React, { useState, useCallback } from "react";
import "./Envelope.css";

const Envelope = ({ children }) => {
  const [phase, setPhase] = useState("closed"); // closed | opening | emerged | fullCard

  const handleSealClick = useCallback(() => {
    if (phase !== "closed") return;

    // Phase 1: Seal breaks, flap opens, card rises
    setPhase("opening");

    // Phase 2: Card fully emerged
    setTimeout(() => {
      setPhase("emerged");
    }, 2800);

    // Phase 3: Transition to full card view
    setTimeout(() => {
      setPhase("fullCard");
    }, 3400);
  }, [phase]);

  const phaseClass = phase === "opening" || phase === "emerged" ? "opening" : "";
  if (phase === "emerged") {
    // keep opening class but also mark as emerged
  }

  return (
    <>
      {/* === Envelope Scene (full screen overlay) === */}
      <div
        className={`envelope-scene ${phase === "fullCard" ? "hidden" : ""}`}
        aria-label="Enveloppe d'invitation de mariage"
        role="presentation"
      >
        <div
          className={`envelope-wrapper ${phase === "opening" ? "opening" : ""} ${phase === "emerged" ? "opening emerged" : ""}`}
        >
          {/* Envelope body (the back with fold lines) */}
          <img
            src="/images/envelopp_vide.png"
            alt=""
            className="envelope-body-img"
            draggable="false"
          />

          {/* Card peeking from inside */}
          <div className="card-peek-wrapper">
            <div className="card-peek">
              <img
                src="/images/fond_carte.png"
                alt=""
                className="card-peek-bg"
                draggable="false"
              />
              <span className="card-peek-text">Hannah & Alan</span>
            </div>
          </div>

          {/* Top flap (opens with 3D rotation) */}
          <div className="flap-top-container">
            <img
              src="/images/haut_enveloppe.png"
              alt=""
              className="flap-top-img"
              draggable="false"
            />
          </div>

          {/* Wax seal button */}
          <button
            className="wax-seal-btn"
            onClick={handleSealClick}
            aria-label="Ouvrir l'invitation de mariage"
            disabled={phase !== "closed"}
          >
            <img
              src="/images/cachet_cire.png"
              alt="Sceau de cire H&A"
              className="wax-seal-img"
              draggable="false"
            />
            {phase === "closed" && <span className="seal-pulse-ring" />}
          </button>

          {/* Dust particles on seal break */}
          <div className="seal-particles">
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
            <span className="particle" />
          </div>

          {/* Invitation text below seal */}
          <p className="envelope-invitation-text">
            {"Esta invitaci\u00F3n es"}
            <br />
            {"exclusiva para ti"}
          </p>

          {/* Subtle hint */}
          <p className="envelope-hint">
            {"Appuyez sur le sceau"}
          </p>
        </div>
      </div>

      {/* === Full Card (revealed after envelope opens) === */}
      <div className={`card-full-view ${phase === "fullCard" ? "visible" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default Envelope;
