import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)} className="button is-info">
        Click Me
      </button>
    </React.Fragment>
  );
};

export default Example;
