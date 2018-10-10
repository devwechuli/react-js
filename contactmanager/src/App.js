import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {

    return (
      <div className="App">

        <Header branding="Contact Manager" />
        <div className="container">

          <Contact name="John Doe" email="jdoe@gmail.com"
            phone="044338999" />
          <Contact name="Karen Smith" email="karen@gmail.com"
            phone="044338232999" />
        </div>

      </div>
    );
  }
}

export default App;
