import React, { useState } from "react";

const Choices = props => {
  const [names, setnames] = useState({});
  const [activedropdown, setactivedropdown] = useState(false);
  console.log(props.data);
  return (
    <React.Fragment>
      <div>
        <label class="checkbox">
          <input type="checkbox" />
          {props.data.name}
        </label>
        <div className="m-l-md">
          {props.data.choices.map(item => {
            return (
              <p>
                <label class="checkbox">
                  <input type="checkbox" />
                  {item.name}
                </label>
                
              </p>
            );
          })}
          {props.data.related.length > 0 ?(<div>
              You might also like
              <div className="m-l-md">
{props.data.related.map(item=>{
    return (
        <p>
          <label class="checkbox">
            <input type="checkbox" />
            {item.name}
          </label>
          
        </p>
      );
})}
              </div>
          </div>):(null)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Choices;
