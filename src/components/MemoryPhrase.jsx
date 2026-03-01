import React from "react";
import "./MemoryPhrase.css";

const MemoryPhrase = ({
  text = "Une douce pensée à nos grands-parents qui veillent sur nous",
}) => {
  return (
    <div className="memory-phrase">
      <p>{text}</p>
    </div>
  );
};

export default MemoryPhrase;
