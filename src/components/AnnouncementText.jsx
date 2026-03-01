import React from "react";
import "./AnnouncementText.css";

const AnnouncementText = ({
  lines = [
    "Ont la joie de vous faire part du",
    "mariage de leurs petits enfants et enfants",
  ],
}) => {
  return (
    <div className="announcement-text">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default AnnouncementText;
