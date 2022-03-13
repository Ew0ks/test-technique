// == Import npm
import { useState } from "react";
import { Routes as Switch, Route } from 'react-router-dom';
import mapLibreGl from "maplibre-gl";

// == Import components
import Navbar from "../Navbar";
import Home from "../Home";
import ViewMap from "../ViewMap";

// == Component
const App = () => {
    const [API_KEY] = useState('4qgA42jnxrnWDigecejN');

    mapLibreGl.prewarm();
    mapLibreGl.workerUrl = `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`;

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<ViewMap />} />
                </Switch>
            </main>
        </div>
    );
}

// == Export component
export default App;
