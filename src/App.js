import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
