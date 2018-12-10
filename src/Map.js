import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './Pin'
// import CRIMES from './crimes.json'
const TOKEN = 'pk.eyJ1IjoicnlhbmJyaWxleSIsImEiOiJjamdia2ZvYWdhdnhrMnhtc2w3bTlkcHNvIn0.gNywL0w1uolFQ75lCeMplw'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

// const CRIMES = [
//   {"crime":"Jay Walking","longitude":-87.623177, "latitude":41.881832},
//   {"crime":"Jay Walking","longitude":-87.923177, "latitude":41.281832},
//   {"crime":"Jay Walking","longitude":-88.123177, "latitude":42.181832},
//   {"crime":"Jay Walking","longitude":-86.923177, "latitude":41.881832}
// ]

export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.881832,
        longitude: -87.623177,
        zoom: 9,
        bearing: 0,
        pitch: 0,
        height: "100vh",
        width: "100vw"
      },
      popupInfo: null
    };
    // this.CRIMES = this.props.CRIMES
    this.renderPopup = this.renderPopup.bind(this)
  }
renderCrime = (crime, index) => {
  return(
    <Marker
      key={index}
      
      longitude={Number(crime.Longitude)}
      latitude={Number(crime.Latitude)}>
      <Pin onClick={() => this.setState({popupInfo: crime})} />
    </Marker>
  );
}
renderPopup(){
  console.log(this.state)
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.Longitude}
        latitude={this.state.popupInfo.Latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p>Crime: {this.state.popupInfo['Primary Type']} <br /> Description: {this.state.popupInfo.Description} 
        <br/>Location Description: {this.state.popupInfo['Location Description']}
        <br/>Date: {this.state.popupInfo['Updated On']}</p>
      </Popup>
    );
  }
render() {
    const {viewport} = this.state;
    // console.log(this.props.crimes)
    // this.setState({})
    
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN} 
        onViewportChange={(viewport) => this.setState({viewport})}>
        {/* {this.renderCrime(this.props.CRIMES[0], 1)} */}
        {this.props.CRIMES.map(this.renderCrime)}
        {this.renderPopup()}
        
        <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
        </div>
      </MapGL>
  
    );
  }
}