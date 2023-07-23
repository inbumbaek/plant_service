import React, { useState } from "react";

const FlippableCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flippable-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front">{frontContent}</div>
      <div className="card-back">{backContent}</div>
    </div>
  );
};
