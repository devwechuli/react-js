import React, { useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <React.Fragment>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)} className="button is-info is-outlined">
        Click Me
      </button>
    </React.Fragment>
  );
};

export default Example;
