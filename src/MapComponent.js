import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class MapComponent extends Component {

  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      error: undefined
    };
  }
  
  onMarkerClick() {
    alert('holis')
  }


  render() {
    
    
    return (
      
      <Map 
      google={this.props.google} 
      style={MapStyle} 
      zoom={10}
      defaultCenter={ {lat: 19.438168,
        lng: -99.068750} }
        visible={true}
      >
 
        <Marker 
        onClick={this.onMarkerClick}
        position={{lat: 19.438168,
                  lng: -99.068750}}
        />

        <Marker 
        onClick={this.onMarkerClick}
        position={{lat: 39.390897,
                  lng: -99.066067}}
        />

      <Marker 
        onClick={this.onMarkerClick}
        position={{lat: 40.640771,
                  lng: -74.016133}}
        />
 
       
      </Map>
    );
  }
}

let MapStyle = {
  border: 'pink',
  borderWidth: 4,
  borderRadius: 10,
  borderStyle: 'solid',
  padding: 20
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCOzgQyguR0MhgN_xU6-WdLzGgjId5wZJY'),
})(MapComponent)
