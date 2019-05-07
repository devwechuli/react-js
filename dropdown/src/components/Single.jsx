import React, { useState } from "react";

const Single = props => {
  const [choices, toogleChoices] = useState(false);
  return (
    <React.Fragment>
      <p>
        <label class="checkbox">
          <input type="checkbox" onChange={() => toogleChoices(!choices)} />
          {props.data.name}
        </label>
        {choices ? (
          <React.Fragment>
            <div className="m-l-md">
              {props.data.choices.map(item => {
                return (
                  <p>
                    <label class="checkbox" />
                    <input type="checkbox" />
                    {item.name}
                  </p>
                );
              })}
            </div>
          </React.Fragment>
        ) : null}
      </p>
    </React.Fragment>
  );
};

export default Single;
