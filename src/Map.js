import React, {Component} from 'react';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import Pin from './Pin'
const TOKEN = 'pk.eyJ1IjoicnlhbmJyaWxleSIsImEiOiJjamdia2ZvYWdhdnhrMnhtc2w3bTlkcHNvIn0.gNywL0w1uolFQ75lCeMplw'
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};
export default class Map extends Component {
constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 41.881832,
        longitude: -87.623177,
        zoom: 12,
        bearing: 0,
        pitch: 0,
        height: "100vh",
        width: "100vw"
      },
      popupInfo: {
                  state:
                    {
                      latitude: 42.881832,
                      longitude: -87.623177
                    }
                }
    };
    this.renderPopup = this.renderPopup.bind(this)
  }
renderPopup(){
    return this.state.popupInfo && (
      <Popup tipSize={5}
        anchor="bottom-right"
        longitude={this.state.popupInfo.state.longitude}
        latitude={this.state.popupInfo.state.latitude}
        onClose={() => this.setState({popupInfo: null})}
        closeOnClick={true}>
        <p>'Some Info'</p>
      </Popup>
    )
  }
// handlePinClick(lat, lon){
//   this.setState(
//     {
//       popupInfo: 
//         {
//           state:
//             {
//               latitude: 42.881832,
//               longitude: -87.623177
//             }
//         }
//     })
//     this.renderPopup()
// }
render() {
    const {viewport} = this.state;
    // this.setState({})
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN} 
        onViewportChange={(viewport) => this.setState({viewport})}>
        {/* {markers} */}
        {this.renderPopup()}
        
        <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
        </div>
          <Marker longitude={-87.623177} latitude={41.881832}>
            <Pin onClick={console.log("CLICKED") && this.renderPopup()}/>
          </Marker>
          
          <Marker longitude={-86.623177} latitude={42.881832}>
            <Pin onClick={() => this.renderPopup()}/>
          </Marker>
          
      
      </MapGL>
  
    );
  }
}