import React from "react";
import "./tutorials.css";
import LaserCutter from "../lasercutter.jpeg";
import Prusa from "../prusaPrinter.jpeg";
import MillingMachine from "../pncMillingMachine.jpeg"
import Bambu from "../bambuPrinter.jpeg";
import VinylCutter from "../vinlyCutter.jpeg";
import SewingMachine from "../sewingMachine.jpeg";

const Tutorials = () => {
    return (
    
        <div className="tutorials-container">
            <h1>Tutorials</h1>
            
            <section className="tutorials-section">
                <img src = {Bambu} alt="Bambu 3D Printer" width="250px" height="250px"/>
                <h2>Bambu 3D Printer</h2>
                <p>
                    The Bambu 3D printer is a versatile machine that can handle a variety of printing tasks. Here’s a demonstration on how to use it effectively.
                </p>
                <a href="https://www.youtube.com/link_to_bambu_3d_printer_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
            
            <section className="tutorials-section">
                <img src = {Prusa} alt="Prusa 3D Printer" width="250px" height="250px"/>

                <h2>Prusa Printer</h2>
                <p>
                    Learn how to set up and operate the Prusa printer for your 3D printing projects.
                </p>
                <a href="https://www.youtube.com/link_to_prusa_printer_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>

            <section className="tutorials-section">
                <img src = {MillingMachine} alt="Milling Machine" width="250px" height="250px"/>

                <h2>Milling Machine</h2>
                <p>
                    The milling machine is perfect for creating precise parts. This tutorial covers the basics of operating the machine.
                </p>
                <a href="https://www.youtube.com/link_to_milling_machine_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
            
            <section className="tutorials-section">
                <h2>Resin Printer</h2>
                <p>
                    The resin printer is ideal for high-detail prints. Here’s how to use it properly.
                </p>
                <a href="https://www.youtube.com/link_to_resin_printer_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
            
            <section className="tutorials-section">
            <img src = {LaserCutter} alt="Laser Cutter" width="250px" height="250px"/>

                <h2>Laser Cutter</h2>
                <p>
                    Learn how to use the laser cutter for precision cutting and engraving.
                </p>
                <a href="https://www.youtube.com/link_to_laser_cutter_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
            
            <section className="tutorials-section">
            <img src = {SewingMachine} alt="Sewing Machine" width="250px" height="250px"/>

                <h2>Sewing Machine</h2>
                <p>
                    The sewing machine is great for fabric projects. This tutorial covers its basic functions.
                </p>
                <a href="https://www.youtube.com/link_to_sewing_machine_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
            
            <section className="tutorials-section">
            <img src = {VinylCutter} alt="VinylCutter" width="250px" height="250px"/>

                <h2>Vinyl Cutter</h2>
                <p>
                    Learn how to use the vinyl cutter for your custom designs.
                </p>
                <a href="https://www.youtube.com/link_to_vinyl_cutter_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </section>
        </div>
    );
};

export default Tutorials;
