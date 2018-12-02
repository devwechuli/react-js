import React from "react";
import News from './News';

const Allnews = props => {
  //console.log(props);
  const items = props.allnews.map((item,key) => {
    return(
     <News key={key} item={item}/>
    )
  });
  console.log(items);
  return <div>{items}</div>;
};

export default Allnews;
