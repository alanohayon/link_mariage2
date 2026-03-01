import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;

      // Tenter l'autoplay au chargement
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasStarted(true);
          })
          .catch(() => {
            // Autoplay bloqué - attendre un clic
            setHasStarted(false);
          });
      }
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      // Si pas encore démarré, lancer la musique
      if (!hasStarted) {
        audioRef.current.play();
        setHasStarted(true);
        setIsMuted(false);
      } else {
        // Sinon, juste mute/unmute
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
      />
      <button
        className={`music-player ${hasStarted && !isMuted ? "playing" : ""}`}
        onClick={toggleMute}
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        {hasStarted && !isMuted ? (
          <Volume2 size={24} strokeWidth={2} />
        ) : (
          <VolumeX size={24} strokeWidth={2} />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
