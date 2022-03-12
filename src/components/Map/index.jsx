// == Import npm
import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";

// == Import style
import "./Map.scss";

// == Component
const Map = () => {
    const mapContainer = useRef(null);
    const [API_KEY] = useState("4qgA42jnxrnWDigecejN");
    const [mapViewport] = useState({
        latitude: 46.8,
        longitude: 2.2,
        zoom: 5.5
    });

    useEffect(() => {

        new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [mapViewport.longitude, mapViewport.latitude],
            zoom: mapViewport.zoom
        });

    }, []);

    return (
        <div className="map-contained">
            <div ref={mapContainer} className="map" />
        </div>
    );
};

// == Export component
export default Map;
