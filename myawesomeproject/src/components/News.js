import React from "react";

const News = props => {

    const {item} = props;
  //console.log(props);
  return (
    <div>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default News;
