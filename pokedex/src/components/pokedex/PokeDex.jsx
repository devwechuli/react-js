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

const PokeDex = () => {
  return (
    <div className="container">
      <h2 className="title has-text-centered m-t-md">Pokedex</h2>
      <div className="columns is-multiline m-t-md m-b-md">
        {pokeDexData.map(item => {
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
