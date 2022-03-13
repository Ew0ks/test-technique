// == Import npm
import { useState } from "react";
import ReactGl from "react-map-gl";
import mapLibreGl from "maplibre-gl";

// == Import style mapLibre-gl
import 'maplibre-gl/dist/maplibre-gl.css';

// == Import style
import "./Map.scss";

// == Component
const ViewMap = () => {
    const [apiKey] = useState("4qgA42jnxrnWDigecejN");
    const [viewState, setViewState] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5.5
    });

    return (
        <div className="map-wrap">
            <ReactGl
                reuseMaps={true} // Stores the board to avoid being destroyed when disassembling the component
                {...viewState}
                onMove={event => setViewState(event.viewState)}
                mapLib={mapLibreGl}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`}
            />
        </div>
    );
};

// == Export component
export default ViewMap;
