// == Import npm
import { useEffect, useRef, useState } from "react";
import mapLibreGl from "maplibre-gl";

// == Import style
import "./ViewMap.scss";

// == Component
const ViewMap = ({ map }) => {
    const [API_KEY] = useState('4qgA42jnxrnWDigecejN');
    const mapContainer = useRef(null);
    const [viewState] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5
    });

    const alreadyMap = (alreadyMap) => {
        const element = document.getElementById("map-wrap");
        element.prepend(alreadyMap);
    };

    useEffect(() => {

        if (!mapLibreGl.supported()) {
            alert('Your browser does not support MapLibre GL');
        }

        if (map.current) {
            alreadyMap(map.current);
            return;
        }

        map.current = new mapLibreGl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom
        }).addControl(new mapLibreGl.NavigationControl(undefined), 'top-right').getContainer();
    });

    return (
        <div className="map-wrap" id="map-wrap">
            {!map.current && <div ref={mapContainer} className="map" />}
        </div>
    );
};

// == Export component
export default ViewMap;
