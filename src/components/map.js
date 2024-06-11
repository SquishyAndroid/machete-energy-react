import {APIProvider, Map, Marker, InfoWindow, useMarkerRef} from '@vis.gl/react-google-maps';
import { Fragment, useState } from 'react';

const markers = [
  { address: 'GP Sports', lat: 37.261584, lng: -121.932108 },
  { address: 'Poppy Hills Golf Course', lat: 36.590528, lng: -121.942239 },
  { address: 'Cycle Gear', lat: 37.000050, lng: -121.556935},
  { address: 'Dutchman\'s Pizza', lat: 37.001406, lng: -121.557775},
  { address: 'G and J Liquor Mart', lat: 36.859374, lng: -121.400482},
  { address: 'Food 4 Less', lat: 36.693211, lng: -121.595495},
  { address: 'Blanco Shell', lat: 36.6554892, lng: -121.6605767},
];

const locations = [
  {
    name: 'GP Sports',
    address: '2020 Camden Ave, San Jose, CA 95124',
    phone: '(408) 377-8780'
  },
  {
    name: 'Poppy Hills Golf Course',
    address: '3200 Lopez Rd, Pebble Beach, CA 93953',
    phone: '(831) 625-2035'
  },
  {
    name: 'Cycle Gear',
    address: '6920 Chestnut St, Gilroy, CA 95020',
    phone: '(408) 847-1810'
  },
  {
    name: 'Dutchman\'s Pizza',
    address: 'South Valley Plaza Shopping Center, 6940 Chestnut St, Gilroy, CA 95020',
    phone: '(408) 848-3322'
  },
  {
    name: 'G and J Liquor Mart',
    address: '191 San Felipe Rd # B, Hollister, CA 95023',
    phone: '(831) 630-1648'
  },
  {
    name: 'Food 4 Less',
    address: 'Coming Soon!',
    phone: ''
  },
  {
    name: 'Blanco Shell',
    address: '1300 S. Main Street',
    phone: ''
  },
]

export function GoogleMap() {
  const [markerRef, marker] = useMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState()

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = (address) => {
    const location = locations.filter(({name}) => name === address);
    setSelectedMarker(location[0])
    setInfoWindowShown(true)
  }

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = () => {
    setInfoWindowShown(false);
  }

  return(
    <APIProvider apiKey={'AIzaSyB4OscUzEV29vHehESbpU3Jl8vYifZ0Igk'}>
      <Map defaultCenter={markers[3]} defaultZoom={8.8}>
        {markers.map(marker => {
          return <Fragment>
            <Marker 
              ref={markerRef}
              key={marker.lat}
              position={marker}
              onClick={() => handleMarkerClick(marker.address)} 
            />
          </Fragment>
        })}
      </Map>

      {infoWindowShown && (
        <InfoWindow 
          className="info-window"
          anchor={marker}
          onCloseClick={handleClose}
        >
          <h2>{selectedMarker.name}</h2>
          <p>{selectedMarker.address}</p>
          <p>{selectedMarker.phone}</p>
        </InfoWindow>
      )}
    </APIProvider>
  )
}