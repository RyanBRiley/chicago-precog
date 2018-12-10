import React, { Component } from 'react';
import './App.css';
import Map from './Map.js'
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends Component {
  render() {
    console.log(this.props.CRIMES)
    return (
      <div className="App">
        <Map CRIMES={this.props.CRIMES}/>
      </div>
    );
  }
}

export default App;
