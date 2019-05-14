import React from "react";
import classes from "./PokeDex.module.css";

const PokeCard = props => {
  const { id, name, type, base_experience } = props.poke;
  let img_id;
  if (id <= 9) {
    img_id = `00${id}`;
  } else if ((id > 9) & (id <= 99)) {
    img_id = `0${id}`;
  } else {
    img_id = id;
  }
  return (
    <div className={`box ${classes.poke}`}>
      <h2 className="subtitle has-text-centered has-text-info has-text-weight-bold">
        {name}
      </h2>
      <figure className="image">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img_id}.png`}
          alt={name}
        />
      </figure>
      <p className="has-text-centered">
        {" "}
        <span className="has-text-weight-bold">Type: </span>
        {type}
      </p>
      <p className="has-text-centered">
        {" "}
        <span className="has-text-weight-bold">EXP: </span>
        {base_experience}
      </p>
    </div>
  );
};

export default PokeCard;
