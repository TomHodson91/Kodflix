
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './harryPotterAndTheGobletOfFire.jpg';
import logo1 from './breakingBad.jpg';
import logo2 from './doctorWho.png';
import logo3 from './merlin.jpg';
import logo4 from './prisonBreak.jpg';
import logo5 from './westWorld.jpg';
import './App.css';

function Gallery() {
  return (
    <div>
      <div className="container">
        <Item source={logo} name='Harry Potter' url='harry-potter' />
        <Item source={logo1} name='Breaking Bad' url='breaking-bad' />
        <Item source={logo2} name='Doctor Who' url='doctor-who' />
        <Item source={logo3} name='Merlin' url='merlin' />
        <Item source={logo4} name='Prison Break' url='prison-break' />
        <Item source={logo5} name='Westworld' url='westworld' />
      </div>
    </div>
  );
}

function Details() {

  return (
    <h2>Hello, this will be the details page for each Movie and TV show :)</h2>
  );
}

class Item extends React.Component {
  render() {
    return (
      <Link to={this.props.url} className="item" >
        <img className="column" src={this.props.source} alt="" />
        <div className="overlay">
          <div className="text">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}

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
