import React from "react";

const Image = props => {
  const { image } = props;
  return <img src={image.urls.thumb} />;
};

export default Image;
