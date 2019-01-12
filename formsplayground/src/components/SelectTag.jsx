import React, { useState } from "react";

const SelectTag = () => {
  const [option, changeoption] = useState(['coconut','apple']);
  const formHandler = e => {
    e.preventDefault();
    alert(`So you like ${option}, interesting`);
  };
  return (
    <form onSubmit={formHandler}>
      <label htmlFor="fruits">
        Pick your favorite flavour
        <select
          name="fruits"
          id="fruits"
          value={option}
          onChange={e => changeoption(e.target.value)}
          multiple={true}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
          <option value="apple">Apple</option>
        </select>
      </label>
      <button className="btn btn-info" type="submit">Submit Favorite Fruit</button>
    </form>
  );
};

export default SelectTag;
