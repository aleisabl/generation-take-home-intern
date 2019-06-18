import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import GetShops from './GetShops.js'

class App extends Component {

  componentDidMount() {
    this.getShops()
    this.renderMap()
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCOzgQyguR0MhgN_xU6-WdLzGgjId5wZJY&callback=initMap')

    window.map = this.map
    window.initMap = this.initMap
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.432608, lng: -99.133209},
      zoom: 13.5
    });
  }


  
/*    let markers = new window.google.maps.Marker({position: {lat: 19.432608, lng: -99.133209}, map: map});
    let markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); */
  render() {

    return (
      <main>
        <div id="map">
        <GetShops/>
        </div>
      </main>
     
    );
  }
}

 function loadScript(url) {
  let index = window.document.getElementsByTagName('script')[0]
  let script = window.document.createElement('script')
  script.src= url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
 }


export default App;
