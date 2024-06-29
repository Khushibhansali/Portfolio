import React from "react";
import "./tutorials.css";
import "./about.css";

import LaserCutter from "../lasercutter.jpeg";
import Prusa from "../prusaPrinter.jpeg";
import MillingMachine from "../pncMillingMachine.jpeg"
import Bambu from "../bambuPrinter.jpeg";
import VinylCutter from "../vinlyCutter.jpeg";
import SewingMachine from "../sewingMachine.jpeg";
import ResinPrinter from "../resinPrinter.jpeg";
import Ultimaker from "../ultimaker.jpeg";

const Tutorials = () => {
    return (
        <section className="team-section">
        <h2>Tutorials</h2>
        <div className="team-members">
          <div className="team-member">
          <img src = {Bambu} alt="Bambu 3D Printer"/>
          <div className="team-info">
              <h3>Bambu 3D Printer</h3>
              <p>
                The Bambu 3D printer is a versatile machine that can handle a variety of printing tasks. Here’s a demonstration on how to use it effectively.
              </p>
              <a href="https://personalwebsite.com" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {Ultimaker} alt="Ultimaker 3D Printer"/>
          <div className="team-info">
              <h3>Ultimaker 3D Printer</h3>
              <p>
                The Ultimaker is a versatile machine that can handle a variety of printing tasks. Here’s a demonstration on how to use it effectively.
              </p>
              <a href="https://personalwebsite.com" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {Prusa} alt="Prusa 3D Printer" />
          <div className="team-info">
              <h3>Prusa Printer</h3>
              <p>
               Learn how to set up and operate the Prusa printer for your 3D printing projects.
              </p>
              <a href="https://www.youtube.com/link_to_prusa_printer_tutorial" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {ResinPrinter} alt="Resin 3D Printer" />
          <div className="team-info">
              <h3>Resin Printer</h3>
              <p>
               Learn how to set up and operate the Prusa printer for your 3D printing projects.
              </p>
              <a href="https://www.youtube.com/link_to_resin_printer_tutorial" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {MillingMachine} alt="Milling Machine"/>
          <div className="team-info">
            <h2>Milling Machine</h2>
            <p>The milling machine is perfect for creating precise parts. This tutorial covers the basics of operating the machine.
            </p>
            <a href="https://www.youtube.com/link_to_milling_machine_tutorial" target="_blank" rel="noopener noreferrer">Watch the tutorial on YouTube</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {LaserCutter} alt="Laser Cutter" />
          <div className="team-info">
              <h3>Laser Cutter</h3>
              <p>
              Learn how to use the laser cutter for precision cutting and engraving.
              </p>
              <a href="https://www.youtube.com/link_to_resin_printer_tutorial" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {VinylCutter} alt="Laser Cutter" />
          <div className="team-info">
              <h3>Vinly Cutter</h3>
              <p>
              Learn how to use the vinyl cutter for your custom designs.
              </p>
              <a href="https://www.youtube.com/link_to_resin_printer_tutorial" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
          <div className="team-member">
          <img src = {SewingMachine} alt="Laser Cutter" />
          <div className="team-info">
              <h3>Sewing Machine</h3>
              <p>
              The sewing machine is great for fabric projects. This tutorial covers its basic functions.
              </p>
              <a href="https://www.youtube.com/link_to_resin_printer_tutorial" target="_blank" rel="noopener noreferrer">Youtube Tutorial</a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Tutorials;
