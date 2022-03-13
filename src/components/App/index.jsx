// == Import npm
import { Routes as Switch, Route } from 'react-router-dom';

// == Import components
import Navbar from "../Navbar";
import Home from "../Home";
import ViewMap from "../ViewMap";

// == Import style mapLibre-gl
import 'maplibre-gl/dist/maplibre-gl.css';

// == Component
const App = () => {

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
