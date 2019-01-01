import React from "react";

const Ninjas = props => {
  const { name, age, belt, id, deleteNinja } = props;
  return (
    <div className="ninja">
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Belt: {belt}</div>
      <button onClick={() => deleteNinja(id)}>Delete Ninja</button>
    </div>
  );
};

export default Ninjas;
