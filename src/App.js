
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
      <div className="Row">
        <Wavey source={logo} name='Harry Potter' />
        <Wavey source={logo1} name='Breaking Bad' />
        <Wavey source={logo2} name='Doctor Who' />
      </div>

      <div className="Row">
        <Wavey source={logo3} name='Merlin' />
        <Wavey source={logo4} name='Prison Break' />
        <Wavey source={logo5} name='Westworld' />
      </div>
    </div>
  );
}


function Details() {

  return (
    <h2>Hello, this will be the details page for each Movie and TV show :)</h2>
  );

}


class Wavey extends React.Component {
  render() {
    return (
      <Link to="/details">
        <div className="item" >

          <img className="column" src={this.props.source} alt="" />

          <div className="overlay">

            <div className="text">{this.props.name}</div>
          </div>

        </div>
      </Link>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Gallery} />
        <Route exact path="/details" component={Details} />
      </div>

    );

  }
}
export default App;
