import React from "react";
import './Dogs.css';

const Dogs = props => {
  console.log(props);
  return (
    <div className="DogList">
      <h1 className="display-1 text-center">Dog List</h1>
      <div className="container">
        <div className="row">
          {props.dogs.map(dog => {
            return (
              <div key={dog.name} className="Dog col-lg-4 text-center">
                <img src={dog.src} alt={dog.name} />
                <h3>{dog.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
