import React from "react";

const imageSources = ["https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
"http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"]
    


const Coin = (props) => {
    const {coinStatus} = props;
    const image =  coinStatus ? (    <figure style={{width:"60%",height:"100%"}} className="image">
    <img
      src={imageSources[coinStatus-1]}
      alt="coin"
      
    />
  </figure>):(null);
  console.log(coinStatus);
  return (
     image

  );
};

export default Coin;
