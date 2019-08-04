import React, { useEffect, useState } from "react";
import "./Card.css";
import { transcode } from "buffer";

const Card = props => {
  // transform:translate(10px,20px) rotate(20deg)
  const [tranform, setTrandform] = useState(null);
  let angle;
  let xPos;
  let yPos;

  useEffect(() => {
    angle = Math.random() * 90 - 45;
    xPos = Math.random() * 40 - 20;
    yPos = Math.random() * 40 - 20;
    setTrandform(`translate(${xPos}px,${yPos}px) rotate(${angle}deg)`);
  }, []);
  console.log(tranform);
  const { image, name } = props;

  return (
    <img
      style={{ transform: { tranform } }}
      className="Card"
      src={image}
      alt={name}
    />
  );
};

export default Card;
