import React, { useEffect } from "react";

const Dog = props => {
  useEffect(() => {
    console.log("I have been called");
  });
  console.log(props);
  return <div>This is actually a dog component</div>;
};

export default Dog;
