import React, { useState } from "react";

function App() {
  const [list, alterlist] = useState([
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]);
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="has-text-centered subtitle">Books</h2>
        <div className="columns">
          {list.map(item => {
            return (
              <div className="column box m-r-md" key={item.objectID}>
                <span className="has-text-weight-bold">
                  {" "}
                  <a href={item.url}>{item.title}</a>
                </span>
                <p>{item.author}</p>
                <p>{item.num_comments}</p>
                <p>{item.points}</p>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
