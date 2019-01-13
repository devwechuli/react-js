import React, { useState } from "react";
import MapContainer from "./components/MapContainer";
import Hero from "./components/Hero";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="container content">
        <Route exact path="/" component={MapContainer} />
      </div>
    </React.Fragment>
  );
};

export default App;
