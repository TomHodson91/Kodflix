import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Gallery from './Gallery'
import Details from './Details'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="" component={Gallery} />
        <Route exact path="/:hi" component={Details} />
      </div>
    );
  }
}
export default App;
