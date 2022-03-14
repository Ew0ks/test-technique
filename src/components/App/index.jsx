// == Import npm
import { useEffect, useRef } from "react";
import { Routes as Switch, Route, useLocation } from 'react-router-dom';

// == Import components
import Navbar from "../Navbar";
import Home from "../Home";
import ViewMap from "../ViewMap";

// == Component
const App = () => {
    const location = useLocation();
    const map = useRef(null);

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Switch>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<ViewMap map={map} />} />
                </Switch>
            </main>
        </div>
    );
}

// == Export component
export default App;
