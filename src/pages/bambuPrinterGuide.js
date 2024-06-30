import React, { useState, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import "./coursework.css";
import frontMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_0.png";
import backMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10_1.png";
import sideMachine from "../bambuPics/Bambu_Lab_X1_Carbon v10.png";
import display from "../bambuPics/display_screen.png";
import printerModel from "../bambuPics/Bambu_Lab_X1_Carbon v0.step";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const BambuPrinterModel = () => {
  const meshRef = useLoader(STLLoader, printerModel);

  useFrame(() => {
    meshRef.rotation.y += 0.01;
  });

  return (
    <group>
      <mesh position={[0, 0, 0]} scale={[2, 2, 2]}> 
      {/* <primitive object={meshRef} /> */}
      </mesh>
    </group>
  );
};

const BambuPrinterGuide = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="events-container">
      <h1>How to Use Your Bambu Lab 3D Printer</h1>

      <section className="events-section">
        <div className="step-buttons">
          {activeStep >= 1 && (
            <button
              className={activeStep === 1 ? 'active' : ''}
              onClick={() => handleStepClick(1)}
            >
              Step 1
            </button>
          )}
          {activeStep >= 2 && (
            <button
              className={activeStep === 2 ? 'active' : ''}
              onClick={() => handleStepClick(2)}
            >
              Step 2
            </button>
          )}
          {activeStep >= 3 && (
            <button
              className={activeStep === 3 ? 'active' : ''}
              onClick={() => handleStepClick(3)}
            >
              Step 3
            </button>
          )}
          {activeStep >= 4 && (
            <button
              className={activeStep === 4 ? 'active' : ''}
              onClick={() => handleStepClick(4)}
            >
              Step 4
            </button>
          )}
          {activeStep >= 5 && (
            <button
              className={activeStep === 5 ? 'active' : ''}
              onClick={() => handleStepClick(5)}
            >
              Step 5
            </button>
          )}
          {activeStep >= 6 && (
            <button
              className={activeStep === 6 ? 'active' : ''}
              onClick={() => handleStepClick(6)}
            >
              Step 6
            </button>
          )}
        </div>

        {activeStep === 1 && (
          <>
            <h3>1. Set up your printer</h3>
            <div className="image-container">
              <img src={frontMachine} alt="Bambu 3D Printer" width="400px" height="200px" />
              <img src={backMachine} alt="Bambu 3D Printer" width="400px" height="200px" />
            </div>
            <Canvas>
              <ambientLight />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <BambuPrinterModel />
              <OrbitControls />
            </Canvas>
            <p>Follow the instructions in the Bambu Lab user manual to assemble and connect your printer. Make sure it is level and the build plate is clean.</p>
          </>
        )}

        {activeStep === 2 && (
          <>
            <h3>2. Install the Bambu Studio software</h3>
            <p>Download the Bambu Studio software from the Bambu Lab website[1]. Install it on your computer and create an account.</p>
          </>
        )}

        {activeStep === 3 && (
          <>
            <h3>3. Design your 3D model</h3>
            <p>Use a 3D modeling program like Tinkercad[4] to create your 3D design. Bambu Studio supports importing common file formats like STL and OBJ.</p>
          </>
        )}

        {activeStep === 4 && (
          <>
            <h3>4. Prepare your print</h3>
            <div className="image-container">
              <img src={sideMachine} alt="Side view of the printer" width="400px" height="200px" />
            </div>
            <p>In Bambu Studio, import your 3D model and adjust the print settings like layer height, infill, and supports if needed. Click "Slice" to generate the G-code.</p>
          </>
        )}

        {activeStep === 5 && (
          <>
            <h3>5. Start printing</h3>
            <div className="image-container">
              <img src={display} alt="Side view of the printer" width="400px" height="200px" />
            </div>
            <p>Insert the SD card with the G-code file into your Bambu printer. Select the print from the menu and press start. The printer will begin extruding layer by layer to create your 3D object.</p>
          </>
        )}

        {activeStep === 6 && (
          <>
            <h3>6. Remove and finish your print</h3>
            <p>When the print is complete, carefully remove the build plate and pop off your printed part. Use tools to remove any supports. You can then paint, sand or assemble your creation.</p>
          </>
        )}

        <p>
          With its user-friendly software and advanced features, the Bambu Lab X1 Carbon makes 3D printing easy and fun[1][2]. Happy printing!
        </p>
      </section>
    </div>
  );
};

export default BambuPrinterGuide;
