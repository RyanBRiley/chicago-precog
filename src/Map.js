import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './Pin'
import axios from 'axios'
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
      CRIMES: null,
      popupInfo: null
    };
    // this.CRIMES = this.props.CRIMES
    this.renderPopup = this.renderPopup.bind(this)
  }
  componentDidMount(){
    axios.get('https://s3.amazonaws.com/crimes-in-chicago/Chicago_Crimes_2012_to_2017_condensed.csv')
    .then(res => {  this.setState({CRIMES: this.csvJSON(res.data)})
    })
  }
  csvJSON(csv){
    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(",");
  
    for(var i=1;i<1000;i++){
  
        var obj = {};
        var currentline=lines[i].split(",");
       
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        if (Number(obj.Latitude) > 40 && 
            Number(obj.Latitude) < 42 &&
            Number(obj.Longitude) > -89 && 
            Number(obj.Longitude) < -86) {
                result.push(obj);
        }
  
    }
    
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
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
        {/* if (!!this.state.CRIMES) {
          console.log("this.state.CRIMES: ", !!this.state.CRIMES)
        } */}
        {!!this.state.CRIMES && this.state.CRIMES.map(this.renderCrime)}
      
        {this.renderPopup()}
        
        <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
        </div>
      </MapGL>
  
    );
  }
}