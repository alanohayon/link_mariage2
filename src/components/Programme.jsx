import React from "react";
import "./Programme.css";

const Programme = ({
  items = [
    { time: "17h", event: "Houppa", note: "avant la tombée de la nuit" },
    { time: "", event: "Cocktail dînatoire", note: "" },
  ],
}) => {
  return (
    <div className="programme">
      <h3 className="programme-title">Programme</h3>
      <div className="programme-items">
        {items.map((item, index) => (
          <div key={index} className="programme-item">
            {item.time && <span className="time">{item.time}</span>}
            <span className="event">{item.event}</span>
            {item.note && <span className="note">({item.note})</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programme;
