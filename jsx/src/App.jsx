import React, { useState } from "react";

function App() {
  const getNum = () => {
    return Math.floor(Math.random() * 10) + 1;
  };
  let num = getNum();
  let msg;
  if (num === 7) {
    msg = "Good";
  } else {
    msg = "Bad";
  }
  return (
    <React.Fragment>
      <h1>Your Number is {num}</h1>
      <p>{num == 7 ? "Congrats" : "Unlucky"}</p>
      {/* Another way to use conditional is the boolean and */}
      {num === 7 && (
        <img src="https://images.unsplash.com/photo-1556783900-2ebe375c20fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      )}

      <div>{msg}</div>
    </React.Fragment>
  );
}

export default App;
