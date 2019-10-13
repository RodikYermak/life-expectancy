import React from 'react';
import '../App.css';

const MyLocation = () => {
  // Code came from here https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
      status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  //   document.querySelector('#find-me').addEventListener('click', geoFindMe);
  return (
    <div>
      <button onClick={geoFindMe} className='App mylocation-button'>
        My Location Button
      </button>
      <p id='status' className='App'></p>
      <p id='map-link' className='App'></p>
    </div>
  );
};

export default MyLocation;
