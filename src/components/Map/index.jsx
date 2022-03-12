// == Import npm
import { useEffect, useRef, useState } from "react";
import mapLibreGl from "maplibre-gl"

// == Import style
import "./Map.scss";

// == Component
const Map = () => {
    const mapContainer = useRef(null);
    const mapRef = useRef(null);
    const [apiKey] = useState("4qgA42jnxrnWDigecejN");
    const [mapViewport] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5.5
    });

    useEffect(() => {

        if (mapRef.current) {
            return;
        }

        if (!mapLibreGl.supported()) {
            alert("Your browser does not support MapLibre GL");
            return;
        }

        mapRef.current = new mapLibreGl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${apiKey}`,
            center: [mapViewport.longitude, mapViewport.latitude],
            zoom: mapViewport.zoom
        }).addControl(new mapLibreGl.NavigationControl(undefined), "top-right");
    });

    return (
        <div className="map-enclose">
            <div ref={mapContainer} className="map" />
        </div>
    );
};

// == Export component
export default Map;
