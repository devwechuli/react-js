import React, { useState, useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [jokeCount, setJokeCount] = useState(10);
  const [refresh, setrefresh] = useState(false);

  const changeJokesNumber = e => {
    if (e.target.value) {
      setJokeCount(e.target.value);
    } else {
      setJokeCount(0);
    }
  };
  useEffect(
    () => {
      fetch(`http://api.icndb.com/jokes/random/${jokeCount}`)
        .then(response => response.json())
        .then(json => {
          setJokes(json.value);
        })
        .catch(error => console.log(error));
    },
    [jokeCount, refresh]
  );
  return (
    <React.Fragment>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title has-text-centered">
            Chuck Norris Joke Generator
          </h1>
          <h2 className="subtitle has-text-centered">
            Laugh out Loud, Serious Jokers Here
          </h2>
        </div>
      </div>
      <div style={{ marginTop: "10px" }} className="container">
        <div className="columns">
          <div className="column is-4">
            <h2 className="subtitle has-text-centered has-text-weight-bold">
              Options
            </h2>
            <label htmlFor="number">Enter number of jokes</label>
            <input
              value={jokeCount}
              onChange={changeJokesNumber}
              type="number"
              id="number"
              className="input"
            />

            <button
              style={{ marginTop: "7px", marginRight: "7px" }}
              className="button is-danger"
              onClick={() => setJokeCount(0)}
            >
              Clear Jokes
            </button>

            <button
              style={{ marginTop: "7px", marginRight: "7px" }}
              className="button is-info"
              onClick={() => setrefresh(!refresh)}
            >
              Refresh Jokes
            </button>
          </div>
          <div style={{ marginLeft: "4px" }} className="column is-8">
            <h2 className="subtitle has-text-centered has-text-weight-bold">
              Dem Jokes
            </h2>
            <ol className="content">
              {jokes.length !== 0 ? (
                <React.Fragment>
                  {jokes.map(joke => {
                    return (
                      <li key={joke.id} className="subtitle">
                        {joke.joke}
                      </li>
                    );
                  })}
                </React.Fragment>
              ) : (
                <p className="has-text-centered has-text-info">
                  No jokes at the moment, sorry buddy
                </p>
              )}
            </ol>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
