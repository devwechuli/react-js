import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./index.css";
import Json from "./db.json";
import Allnews from "./components/Allnews";

class App extends Component {
  state = {
    news: Json,
    filteredNews: []
  };
  getKeyword = e => {
    let keyword = e.target.value;
    let filtered = this.state.news.slice();
    let dfilter = filtered.filter(item => {
      return item.title.indexOf(keyword) > -1;
    });
    this.setState({ filteredNews: dfilter });
    //console.log(dfilter);
  };
  render() {
    return (
      <div>
        <Header keywords={e => this.getKeyword(e)} />
        <Allnews
          allnews={
            this.state.filteredNews.length === 0
              ? this.state.news
              : this.state.filteredNews
          }
          name={"Paul"}
        >
          <h2>H2 heading</h2>
          <p>This is a paragraph</p>
        </Allnews>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
