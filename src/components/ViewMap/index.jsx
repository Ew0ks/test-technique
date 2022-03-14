// == Import npm
import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapLibreGl from "!maplibre-gl";

// == Import style
import "./ViewMap.scss";

// == Component
const ViewMap = ({ mapRef }) => {
    const [API_KEY] = useState('4qgA42jnxrnWDigecejN');
    const mapContainer = useRef(null);
    const [viewState] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5
    });

    const addMapInTheDom = (map) => {
        const element = document.getElementById("map-wrap");
        element.prepend(map);
    };

    useEffect(() => {

        if (!mapLibreGl.supported()) {
            alert('Your browser does not support MapLibre GL');
        }

        if (mapRef.current) {
            addMapInTheDom(mapRef.current);
            return;
        }

        mapRef.current = new mapLibreGl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom
        }).addControl(new mapLibreGl.NavigationControl(undefined), 'top-right').getContainer();
    });

    return (
        <div className="map-wrap" id="map-wrap">
            {!mapRef.current && <div ref={mapContainer} className="map" />}
        </div>
    );
};

// == Export component
export default ViewMap;
