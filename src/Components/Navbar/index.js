import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavIcon,
  NavMenu,
  NavSubMenu,
  NavSubMenuItem
} from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import './fonts.css';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            height: 0.5
        }}
    />
  );

  return (
    <>
      <Nav>
        <br/><br/><br/><br/>
        <h1 className="kalnia-glaze"> Khushi Bhansali</h1>
        <NavIcon onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </NavIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/" > Home </NavLink>
          <NavLink to="/projects" > Work 
            <NavSubMenu>
              <NavSubMenuItem to="/projects" onClick={toggleNav}>
               Projects
              </NavSubMenuItem>
              <NavSubMenuItem to="/art" onClick={toggleNav}>
                Art
              </NavSubMenuItem>
            </NavSubMenu>
          </NavLink>

          <NavLink to="/About" > About </NavLink>
          <a href="https://drive.google.com/file/d/111BJSZvob2cqN00C7E_PUchjKKvDi74K/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          
        </NavMenu>
      </Nav>
      <ColoredLine color="#808080" />

    </>
  );
};

export default Navbar;
