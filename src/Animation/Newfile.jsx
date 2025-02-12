import React from "react";
import "./JumpingIcons.css";
import net from "../assets/net.png";
import aws from "../assets/aws.png";
import sql from "../assets/sql.png";


const JumpingIcons = () => {
  return (
    <div className="image-container">
      <div className="img icon1"><img src={net}/></div>
      <div className="img icon2"><img src={sql} /></div>
      <div className="img icon3"><img src={aws} /></div>
    </div>
  );
};

export default JumpingIcons;
