import React, { useState } from "react";
import Single from "./Single";

const Choice = props => {
 
  return (
    <React.Fragment>
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
        {props.data.related.length > 0 ? (
          <div>
            You might also like
            {props.data.related.map(item => {
              return (
               <Single data={item}/>
              );
            })}
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Choice;
