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
      <div>

      <div className="row">
        <div class="column"> 
          <img src={logo} alt="logo" />
        </div>
        <div class="column">
          <img src={logo1} alt="logo1" />
        </div>
        <div class="column">
          <img src={logo2} alt="logo2" />
        </div>
      </div>

      <div class="row">
      <div class="column">
          <img src={logo3} alt="logo3" />
        </div>
        <div class="column">
          <img src={logo4} alt="logo4" />
        </div>
        <div class="column">
          <img src={logo5} alt="logo5" />
        </div>
      </div>

      </div>
    );
  }
}

export default App;
