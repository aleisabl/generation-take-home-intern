
import React, { Component } from 'react'
import './styles/App.css'
import apiKey from '../Constants'
import Logo from '../assets/logo.png';
import StoreForm from './StoreForm';

const storeDirectory = require('../store_directory.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: []};


    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  //First it runs renderMap wich loads the google maps api
  componentDidMount() {
    this.renderMap()
  }
  
  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`)
    window.initMap = this.initMap
  }

  handleClick(e) {

      this.setState(prevState => ({
        list: prevState.list.concat('hola')
      }));

      alert(this.state.list)
     
  }

  initMap = () => {

    // Creating the Map
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 19.432608, lng: -99.133209 },
      zoom: 12
    })

    //maping thru the JSON rather than getting the data via axios
    //creating the marker for every position and passing name, title, etc
    storeDirectory.map((store) => {
      const marker = new window.google.maps.Marker({
        position: { lat: store.Coordinates.lat, lng: store.Coordinates.lng },
        name: store.Name,
        title: store.Address,
        map,
      });

      // Display the dynamic markers
      let contentString =   `<h2 id="store-name">${store.Name} <h2/>
                            <p id="address">Address: ${store.Address}<p/>
                            ` 
                                                  
      // creating an InfoWindow
      let infowindow = new window.google.maps.InfoWindow()

      // click on A Marker! It shows infowindow
      marker.addListener('click', function () {
        
        // changing the content of indowindow passing contentstring
        infowindow.setContent(contentString)

        // opening InfoWindow
        infowindow.open(map, marker)
      })
      
    })
  }


  render() {
    return (

      <main>

        <h1>Stores in Mexico City</h1>
        <h2>Open your closest store and add them to your list!</h2>

        <img id="Logo" src={Logo} alt="website logo" />

        <div id="map"></div>

        <StoreForm/>

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

export default App;