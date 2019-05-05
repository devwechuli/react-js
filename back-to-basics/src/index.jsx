import React from "react";
import ReactDOM from "react-dom";
import "./styles/bulma.css";
import "./styles/custom.css";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
