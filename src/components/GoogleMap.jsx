import React from 'react';

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {myMapStyles} from '../scripts/mapStyles';

const GoogleMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGbia_wgz5OYt3_3ot3o-p1Uf1-ceMUAw&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap 
    defaultZoom={13} 
    defaultCenter={{ lat: 14.676, lng: 121.0437 }}
    defaultOptions={{
      styles: myMapStyles
    }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 14.676, lng: 121.0437 }} />
    )}
  </GoogleMap>
));
export default GoogleMapComponent;