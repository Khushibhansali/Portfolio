import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import Tutorials from "./pages/tutorials";
import Coursework from "./pages/coursework";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/coursework" element={<Coursework />} />
                <Route path="/tutorials" element={<Tutorials />} />
            </Routes>
        </Router>
    );
}

export default App;