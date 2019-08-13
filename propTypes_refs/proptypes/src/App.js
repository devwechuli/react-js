import React from "react";

import "./App.css";

const Person = ({ img, name, age }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
    </article>
  );
};

class PersonList extends React.Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/men/64.jpg",
        name: "John",
        age: 26
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/women/66.jpg",
        name: "Jess",
        age: 24
      }
    ]
  };
  render() {
    return (
      <section>
        {this.state.people.map(person => {
          return (
            <Person
              key={person.id}
              img={person.img}
              name={person.name}
              age={person.age}
            />
          );
        })}
      </section>
    );
  }
}
function App() {
  return (
    <div>
      <PersonList />
    </div>
  );
}

export default App;
