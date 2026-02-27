import React from "react";
import "./HebrewTitle.css";

// Inverse le texte hébreu pour SVG textPath (qui ne supporte pas RTL)
function reverseHebrew(text) {
  const finalToNormal = { ך: "כ", ם: "מ", ן: "נ", ף: "פ", ץ: "צ" };
  const normalToFinal = { כ: "ך", מ: "ם", נ: "ן", פ: "ף", צ: "ץ" };

  const reversed = text.split("").reverse();

  return reversed
    .map((char, i) => {
      const isEndOfWord =
        i === reversed.length - 1 || /[\s,.]/.test(reversed[i + 1]);
      if (finalToNormal[char] && !isEndOfWord) return finalToNormal[char];
      if (normalToFinal[char] && isEndOfWord) return normalToFinal[char];
      return char;
    })
    .join("");
}

const HebrewTitle = ({
  text = "קול ששון וקול שמחה, קול חתן וקול כלה",
  fontSize = "clamp(1.2rem, 4vw, 1.4rem)",
  fontFamily = "'Cardo', serif",
}) => {
  const reversedText = reverseHebrew(text);

  return (
    <div className="hebrew-title-container">
      <svg
        className="hebrew-title-svg"
        viewBox="-20 0 440 50"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path id="curve" d="M -20,45 Q 200,8 420,45" fill="transparent" />
        </defs>
        <text className="hebrew-title-text" style={{ fontSize, fontFamily }}>
          <textPath href="#curve" startOffset="50%" textAnchor="middle">
            {reversedText}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default HebrewTitle;
