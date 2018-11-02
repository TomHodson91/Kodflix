import React, { Component } from 'react';

import logo from './harryPotterAndTheGobletOfFire.jpg';
import logo1 from './breakingBad.jpg';
import logo2 from './doctorWho.png';
import logo3 from './merlin.jpg';
import logo4 from './prisonBreak.jpg';
import logo5 from './westWorld.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="row">
        <div className="item"> <img className="column" src={logo} alt="" /></div>
        <div className="item"> <img className="column" src={logo1} alt="" /></div>
        <div className="item"> <img className="column" src={logo2} alt="" /></div>
      </div>

      <div className="row">
        <div className="item"><img className="column" src={logo3} alt="" /></div>
        <div className="item"><img className="column" src={logo4} alt="" /></div>
        <div className="item"><img className="column" src={logo5} alt="" /></div>
      </div>

      </div>
    );
  }
}

export default App;
