import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./index.css";
import JSON from "./db.json";
import Allnews from "./components/Allnews";

// const App = () => {
//   console.log(JSON);
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// };

class App extends Component {
  state = {
    news: JSON
  };
  render() {
    //console.log(this.state.news);
    return (
      <div>
        <Header />
        <Allnews allnews={this.state.news} name={'Paul'}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
