import React from "react";
import PokeCard from "./PokeCard/PokeCard";

let pokeDexData = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 651 }
];

let loosers_score = 0;
const loosers = pokeDexData.filter(item => {
if(item.base_experience < 100){
  loosers_score += item.base_experience
}
  return item.base_experience < 100;
});

let winners_score=0
const winners = pokeDexData.filter(item => {
 if(item.base_experience > 100){
   winners_score += item.base_experience;
 }
  return item.base_experience >= 100;
});
const PokeDex = () => {
  return (
    <div className="container">
      <h2 className="title has-text-centered m-t-md m-b-md">Pokedex</h2>

      <h2 className="subtitle has-text-danger has-text-centered m-t-md">
        Losing Hand
      </h2>
      <p className="has-text-centered"><span className="has-text-weight-bold">Aggregate Score: </span>{loosers_score}</p>
      <div className="columns is-multiline m-b-md">
        {loosers.map(item => {
          return (
            <div key={item.id} className={`column is-3`}>
              <PokeCard poke={item} />
            </div>
          );
        })}
      </div>

      <h2 className="subtitle has-text-success has-text-centered m-t-md">
        Winning Hand
      </h2>
      <p className="has-text-centered"><span className="has-text-weight-bold">Aggregate Score: </span>{winners_score}</p>
      <div className="columns is-multiline m-b-md">
        {winners.map(item => {
          return (
            <div key={item.id} className={`column is-3`}>
              <PokeCard poke={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeDex;
