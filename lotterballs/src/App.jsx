import React, { Fragment } from "react";
import AllBalls from "./components/AllBalls";
import "./components/ball.css";

function App() {
  return (
    <Fragment>
      <AllBalls />
      <AllBalls title="Mini Daily" maxNum={10} maxBalls={4} />
    </Fragment>
  );
}

export default App;
