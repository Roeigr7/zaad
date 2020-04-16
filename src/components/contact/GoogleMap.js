import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = () => <i  style={{color:'red',fontSize:'20px'}} class="fas fa-map-marker-alt"></i>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.236530,
      lng: 34.789170
    },
    zoom: 10
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAazlBfdZtyyPF47ku_0nkKP45mRsvdGnw' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={31.236530}
            lng={34.789170}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;