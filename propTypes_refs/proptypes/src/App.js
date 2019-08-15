import React from "react";
import PropTypes from "prop-types";
import ControlledInputs from "./components/ControlledInputs";
import AsyncSetState from "./components/AsyncSetState";

const Person = ({ img, name, age, info }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name: {name}</h4>
      <h4>age: {age}</h4>
      <h4>info: {info}</h4>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

// Person.propTypes = {
//   person: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     age: PropTypes.number.isRequired,
//     info: PropTypes.string.isRequired
//   })
// };

Person.defaultProps = {
  img: "https://randomuser.me/api/portraits/women/66.jpg",
  name: "Jane Doe",
  age: 100,
  info: "Info about this person"
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
      },
      {
        id: 3,
        img: "https://randomuser.me/api/portraits/women/62.jpg",
        name: "Mercy",
        age: 24
      },
      {
        id: 4,
        img: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Linda",
        age: 34,
        info: "Some info about Linda"
      }
    ]
  };
  render() {
    return (
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
          padding: "20px"
        }}
      >
        {this.state.people.map(person => {
          return (
            <Person
              key={person.id}
              img={person.img}
              name={person.name}
              age={person.age}
              info={person.info}
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
      <ControlledInputs/>
      <AsyncSetState/>
      
    </div>
  );
}

export default App;
