import React, { useEffect, useRef } from 'react';
import './Maps.css';
import { useNavigate } from 'react-router-dom';

const Maps = () => {
  const navigate =useNavigate();
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const autocompleteRef = useRef(null);
  let map, autocomplete;

  useEffect(() => {
    const initializeMap = () => {
      map = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat: 51.5285582, lng: -0.2416815580078125 }, // London, UK
        zoom: 12,
      });

      autocomplete = new window.google.maps.places.Autocomplete(searchInputRef.current);
      autocomplete.bindTo('bounds', map);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          console.error('No place data available');
          return;
        }

        map.setCenter(place.geometry.location);
        map.setZoom(15); // Adjust zoom level as needed
      });
    };

    if (window.google && window.google.maps && mapContainerRef.current) {
      initializeMap();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/')
    console.log('Logged out successfully');
  };

  return (
    <div className="map-container">
          <button onClick={handleLogout}>Logout</button>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search for a location..."
        className="inputClasses"
      />
      <div ref={mapContainerRef} className="mapContainerClasses"></div>
    </div>
  );
};

export default Maps;
