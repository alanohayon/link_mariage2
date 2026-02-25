import React from "react";
import "./MemoryPhrase.css";

const MemoryPhrase = ({
  text = "Une douce pensée à nos grands-parents qui veillent sur nous",
  fontFamily = "'Cormorant Garamond', serif",
}) => {
  return (
    <div className="memory-phrase">
      <p style={{ fontFamily }}>{text}</p>
    </div>
  );
};

export default MemoryPhrase;
