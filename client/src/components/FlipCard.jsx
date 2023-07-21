import React from "react";

const FlipCard = () => {
  return (
    <div className="container">
      {/* ----------CARD---------- */}
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="../images/d-4.jpg" />

            <p className="title">Brussel's Dwarf Hawaiian </p>
            <p>Flip Me!</p>
          </div>
          <div className="flip-card-back">
            <p>
              Heptapleurum arboricola is a flowering plant in the family
              Araliaceae, native to Taiwan and Hainan Province, China.
            </p>
          </div>
        </div>
      </div>