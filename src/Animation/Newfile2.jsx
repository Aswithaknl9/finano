import React from "react";
import "./JumpingIcons.css";
import fast from "../assets/fast.png";
import js from "../assets/js.png";
import react from "../assets/react.png";


const JumpingIcons = () => {
  return (
    <div className="image-container">
      <div className="img icon4"><img src={fast}/></div>
      <div className="img icon5"><img src={react} /></div>
      <div className="img icon6"><img src={js} /></div>
    </div>
  );
};

export default JumpingIcons;
