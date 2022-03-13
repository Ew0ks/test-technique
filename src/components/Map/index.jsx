// == Import npm
import { useState } from "react";
import ReactGl from "react-map-gl";
import mapLibreGl from "maplibre-gl";

// == Import style
import "./Map.scss";

// == Component
const Map = () => {
    const [apiKey] = useState("4qgA42jnxrnWDigecejN");
    const [mapViewport] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5.5
    });

    return (
        <div className="map-enclose">
            <ReactGl
                reuseMaps={true}
                initialViewState={{
                    longitude: mapViewport.longitude,
                    latitude: mapViewport.latitude,
                    zoom: mapViewport.zoom
                }}
                mapLib={mapLibreGl}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
            />
        </div>
    );
};

// == Export component
export default Map;
