import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

/* dataUrl = 'https://raw.githubusercontent.com/aleisabl/generation-take-home-intern/master/src/store_directory.json' */

class App extends Component {

  componentDidMount() {
    this.getShops()
    this.renderMap()
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCOzgQyguR0MhgN_xU6-WdLzGgjId5wZJY&callback=initMap')

    window.initMap = this.initMap
  }

  getShops = () => {
    const endPoint = 'https://raw.githubusercontent.com/aleisabl/generation-take-home-intern/master/src/store_directory.json'

    axios.get(endPoint /* + new URLSearchParams(parameters) */)
    .then(response => {
      this.data = response.data;

      this.data.forEach((item) => {
        console.log("found: ", item)
        console.log("found id: ", item.Coordinates)

        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.432608, lng: -99.133209},
          zoom: 13.5
        });

        let markerLatlng = new window.google.maps.LatLng(item.Coordinates.lat, item.Coordinates.lng);
        let marker = new window.google.maps.Marker({
          position: markerLatlng, map:map
      });
      marker.item = item; // store information of each item in marker
        
      marker.setMap(map); // where `map` is the instance of Google Map
      window.google.maps.event.addListener(marker, "click", function() {
        alert('hola')
          // retrieve information using `this.item` and create dynamic HTML to show it. 
          // this.item.Post.datetime, this.item.Post.content etc.
      });

      });

     
    })
    .catch(error => {
      console.log('auxilio!! ' + error)
    })
  }

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.432608, lng: -99.133209},
      zoom: 13.5
    });
  }

  render() {

    return (
      <main>
        <div id="map">
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


 /* const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: '0CJOAQBDVLTUTOZEYIT2MGWKC0FRYVYIRJTYZGL4RLGFUZSZ',
      client_secret: 'HTJ1LKWHJJFN1EZIB1YSPBC0LU2UPXQOTORE4Y25KQVTU40Q',
      query: 'Red Barn Stores',
      near: 'Mexico',
      v: '20180323'
    } */

    /*    let markers = new window.google.maps.Marker({position: {lat: 19.432608, lng: -99.133209}, map: map});
    let markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}); */


       /* for (var i = 0; i < response.data.length; i++) {
        var item = response.data[i];
        let map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 19.432608, lng: -99.133209},
          zoom: 13.5
        });
        console.log(item)
    
        var markerLatlng = new window.google.maps.LatLng(item.Coordinates.lat, item.Coordinates.lng);
        var marker = new window.google.maps.Marker({
            position: markerLatlng, map:map
        });
        marker.item = item; // store information of each item in marker
        
        marker.setMap(map); // where `map` is the instance of Google Map
        window.google.maps.event.addListener(marker, "click", function() {
          alert('hola')
            // retrieve information using `this.item` and create dynamic HTML to show it. 
            // this.item.Post.datetime, this.item.Post.content etc.
        });
    
    } */