import React from 'react';

const initMap = () => {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.432608, lng: -99.133209},
      zoom: 13.5
    });
  }

  export default initMap;