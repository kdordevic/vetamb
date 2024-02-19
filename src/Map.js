import React from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import "./style/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


const Map = () => {
    const [viewport, setViewport] = React.useState({
      width: "",
      height: "400px",
      latitude: 44.76532887627308, // Initial latitude
      longitude: 20.480645967692666, // Initial longitude
      zoom: 15, // Initial zoom level
    });
const markerCoordinates = [44.76532887627308, 20.480645967692666];

    return (
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={
          "pk.eyJ1IjoiY2FjaXRhayIsImEiOiJjbHNuZzFkMDUwM2trMmtxcTRzYjl6aXFkIn0.dQP81MhYjJ3q1wUbm3soKA"
        }
        // onViewportChange={(viewport) => setViewport(viewport)}
        onMove={(evt) => setViewport(evt.newViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker
          latitude={markerCoordinates[0]}
          longitude={markerCoordinates[1]}
        >
          <div className="marker">
            <FontAwesomeIcon icon={faPaw} />
          </div>
        </Marker>
      </ReactMapGL>
    );
};

export default Map;