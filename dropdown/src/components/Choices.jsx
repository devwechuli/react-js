import React, { useState } from "react";
import Choice from "./Choice";

const Choices = props => {
  const [names, setnames] = useState({});
  const [activedropdown, setactivedropdown] = useState(false);
  console.log(props.data);
  return (
    <React.Fragment>
      <div>
        <label class="checkbox">
          <input
            type="checkbox"
            onChange={() => setactivedropdown(!activedropdown)}
          />
          {props.data.name}
        </label>
        {activedropdown ? <Choice data={props.data} /> : null}
      </div>
    </React.Fragment>
  );
};

export default Choices;
