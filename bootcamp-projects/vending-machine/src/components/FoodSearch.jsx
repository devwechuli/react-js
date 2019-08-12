import React, { useState } from "react";
import { Link } from "react-router-dom";

const FoodSearch = props => {
  const [query, setQuery] = useState("");
  const handleSearchInputChange = e => {
    setQuery(e.target.value);
  };
  const handleClick = () => {
    alert("Saved your food in the db!");
    props.history.push(`/food/${query}`);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search a food"
        value={query}
        onChange={handleSearchInputChange}
      />
      {/* <Link exact to={`/food/${query}`}>
        <button onClick={handleClick}>Search</button>
      </Link> */}
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default FoodSearch;
