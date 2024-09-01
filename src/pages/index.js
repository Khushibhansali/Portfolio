import React, { useState } from 'react';
import './index.css';
import Spline from '@splinetool/react-spline';

const App = () => {

  return (
    <div className="app-container">
      <header className="hero-section" style={{ backgroundColor: "#000", height: "60%" }}>
      {/* <Spline scene="https://prod.spline.design/Ta10Ap4V0G-SPp63/scene.splinecode" /> */}
      {/* <Spline scene="https://prod.spline.design/1-5WaQ9nWjFVuHpJ/scene.splinecode" /> */}
      <Spline scene="https://prod.spline.design/CrY5xgys0AK9rdt2/scene.splinecode" />

        </header>
    </div>
  );
}

export default App;
