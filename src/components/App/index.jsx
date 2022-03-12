// == Import npm
import { Routes, Route } from 'react-router-dom';

// == Import component
import Navbar from "../Navbar";
import Home from "../Home";
import Map from "../Map";

const App = () => {
    return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
            </Routes>
        </main>
    </div>
    );
}

export default App;
