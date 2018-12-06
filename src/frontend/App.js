import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Gallery from './Gallery'
import Details from './Details'
import notFound from './NotFound'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/not-found" component={notFound} />
          <Route exact path="/:showPath" component={Details} />
        </Switch>
      </div>
    );
  }
}
export default App;
