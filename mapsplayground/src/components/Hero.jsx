import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Google Map with React</h1>
          <h2 className="subtitle">Lets Map the World</h2>
        </div>
      </div>
      <div className="tabs is-centered">
        <ul>
          <li className="is-active">
            <Link to="/">
              <span class="icon is-small">
                <i class="fas fa-image" aria-hidden="true" />
              </span>
              <span>Simple Geolocation</span>
            </Link>
          </li>
          <li>
            <Link to="/browserloc">
              <span class="icon is-small">
                <i class="fas fa-film" aria-hidden="true" />
              </span>
              <span>Browser Location</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
