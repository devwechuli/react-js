import React from "react";
import Rainbow from '../hoc/Rainbow'

const About = props => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis natus at quae ab veniam modi eaque totam nobis rem quas dolorem autem, pariatur praesentium eveniet ea dignissimos libero iusto nam.</p>
    </div>
  );
};

export default Rainbow(About);
