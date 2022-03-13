// == Import npm
import { useState } from "react";
import ReactGl from "react-map-gl";
import mapLibreGl from "maplibre-gl";

// == Import style
import "./Map.scss";

// == Component
const ViewMap = () => {
    const [viewState, setViewState] = useState({
        longitude: 2.2,
        latitude: 46.8,
        zoom: 5
    });

    return (
        <div className="map-wrap">
            <ReactGl
                reuseMaps={true} // Stores the board to avoid being destroyed when disassembling the component
                initialViewState={{...viewState}}
                onViewportChange={setViewState}
                mapLib={mapLibreGl}
                mapStyle={"https://demotiles.maplibre.org/style.json"}
            />
        </div>
    );
};

// == Export component
export default ViewMap;
