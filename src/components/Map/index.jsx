// == Import npm
import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";

// == Import style
import "./Map.scss";

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [longitude, setLongitude] = useState(4.835659);
    const [latitude, setLatitude] = useState(45.764043);
    const [zoom, setZoom] = useState(14);
    const [API_KEY] = useState("4qgA42jnxrnWDigecejN");

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [longitude, latitude],
            zoom: zoom
        });
    });

    return (
        <div className="map-contained">
            <div ref={mapContainer} className="map" />
        </div>
    );
};

export default Map;
