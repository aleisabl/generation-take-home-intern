
import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class YourComponent extends Component {

  state = {
    Coordinates: []
  }

  //First it runs getCoordinates wich it fetchs the url of the sores and passes it
  componentDidMount() {
    this.getCoordinates()
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCOzgQyguR0MhgN_xU6-WdLzGgjId5wZJY&callback=initMap')
    window.initMap = this.initMap
  }

  getCoordinates = () => {
    const endPoint = "https://raw.githubusercontent.com/aleisabl/generation-take-home-intern/master/src/store_directory.json"

    axios.get(endPoint)
      .then(response => {

        for (var i = 0; i < response.data.length; i++) {

          this.setState({
            Coordinates: response.data[i]
          }, this.renderMap()) //redering renderMap (loadscript) as a Callback after our state is refreshed, otherwise it crashes

        }
        
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })

  }

  initMap = () => {

    // Creating the Map
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.432608, lng: -99.133209},
      zoom: 8
    })

    // Creating an InfoWindow
    let infowindow = new window.google.maps.InfoWindow()

    // Display the dynamic markers
      let contentString = `Red Barn Store`

      // Creating the Marker
        let marker = new window.google.maps.Marker({
          position: {lat: this.state.Coordinates.Coordinates.lat , lng: this.state.Coordinates.Coordinates.lng},
          map: map
        })

      // Click on A Marker! It shows infowindow
      marker.addListener('click', function() {

        // Changing the content of indowindow passing contentstring
        infowindow.setContent(contentString)

        // Opening InfoWindow
        infowindow.open(map, marker)
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
  let index  = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default YourComponent;