import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const StoreMap = () => {
  const position = { lat: 43.9677667, lng: 25.3336584 };
  const keyMap = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  return (
    <div style={{ height: "800px", width: "800px" }}>
      <APIProvider apiKey={keyMap}>
        <Map defaultCenter={position} defaultZoom={10} style={{ height: "100%", width: "100%" }}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default StoreMap;
