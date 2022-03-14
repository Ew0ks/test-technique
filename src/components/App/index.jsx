// == Import npm
import { useRef } from "react";
import { Routes as Switch, Route } from 'react-router-dom';

// == Import components
import Navbar from "../Navbar";
import Home from "../Home";
import ViewMap from "../ViewMap";

// == Component
const App = () => {
    const mapRef = useRef(null);

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<ViewMap map={mapRef} />} />
                </Switch>
            </main>
        </div>
    );
}

// == Export component
export default App;
