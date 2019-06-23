
import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { ReactComponent as Logo } from './logo.svg';
import apiKey from './Constants'

const storeDirectory = require('./store_directory.json');


class YourComponent extends Component {

  state = {
    CoordinatesState: []

  }

  //First it runs getCoordinates wich it fetchs the url of the sores and passes it
  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`)
    window.initMap = this.initMap
  }

 
  initMap = () => {

    // Creating the Map
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 19.432608, lng: -99.133209 },
      zoom: 8
    })

          // Creating an InfoWindow
          let infowindow = new window.google.maps.InfoWindow()

          // Display the dynamic markers
          let contentString = `Red Barn Store`

    //maping thru the JSON rather than getting the data via axios
    //creating the marker for every position and passing name, title, etc
    storeDirectory.map((store) => {
      const marker = new window.google.maps.Marker({
        position: { lat: store.Coordinates.lat, lng: store.Coordinates.lng },
        name: store.Name,
        title: store.Address,
        map,
      });


    // Click on A Marker! It shows infowindow
    marker.addListener('click', function () {

      // Changing the content of indowindow passing contentstring
      infowindow.setContent(contentString)

      // Opening InfoWindow
      infowindow.open(map, marker)
    })

    })

    


  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default YourComponent;