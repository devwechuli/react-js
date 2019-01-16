import React, { useState } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const MapContainer = props => {
  const [mapState, changeMapState] = useState({
    showInfo: false,
    activeMarker: {},
    selectedPlace: {}
  });
  const onMarkerClick = (props, marker, e) => {
    changeMapState({
      showInfo: true,
      activeMarker: marker,
      selectedPlace: props
    });
  };
  const onClose = props => {
    if (mapState.showInfo) {
      changeMapState({
        showInfo: false,
        activeMarker: null,
        selectedPlace: mapState.selectedPlace
      });
    }
  };
  return (
    <div className="columns">
      <div className="column ">
        <div className="mymap">
          <Map
            google={props.google}
            zoom={14}
            style={{
              width: "100%",
              height: "100%"
            }}
            initialCenter={{
              lat: -1.2833,
              lng: 36.8164
            }}
          >
            <Marker onClick={onMarkerClick} name={"Juja baby"} />
            <InfoWindow
              marker={mapState.activeMarker}
              visible={mapState.showInfo}
              onClose={onClose}
            >
              <div>
                <h4>{mapState.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
      <div class="modal">
        <div class="modal-background" />
        <div class="modal-content">
          <p class="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </p>
        </div>
        <button class="modal-open is-large" aria-label="open" />
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAdhygcBnf1PutS33V4xIpXh4S4OXWcJr4"
})(MapContainer);
