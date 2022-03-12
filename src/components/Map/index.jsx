// == Import npm
import { useEffect } from "react";
import mapLibreGl from "maplibre-gl";

// == Import style
import "./Map.scss";

// == Component
const Map = () => {

    useEffect(() => {
        new mapLibreGl.Map({
            container: "test",
            style: "https://api.maptiler.com/maps/streets/style.json?key=4qgA42jnxrnWDigecejN",
            center: [2.2, 46.8],
            zoom: 5.5
        });
    }, [])

    return (
        <div className="map-contained">
            <div id="test" className="map" />
        </div>
    );
};

// == Export component
export default Map;
