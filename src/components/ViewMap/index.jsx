// == Import npm
import { useEffect, useRef, useState } from "react";
import mapLibreGl from "maplibre-gl";

// == Import style
import "./ViewMap.scss";

// == Component
const ViewMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [API_KEY] = useState('4qgA42jnxrnWDigecejN');
    const [viewState] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5
    });

    mapLibreGl.prewarm();
    mapLibreGl.workerUrl = `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`;

    useEffect(() => {

        if (!mapLibreGl.supported()) {
            alert('Your browser does not support MapLibre GL');
        }

        if (map.current) {
            return;
        }

        map.current = new mapLibreGl.Map({
            container: mapContainer.current,
            style: mapLibreGl.workerUrl,
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom
        });
    });

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
};

// == Export component
export default ViewMap;
