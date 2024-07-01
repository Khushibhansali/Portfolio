import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavIcon,
  NavMenu,
  NavSubMenu,
  NavSubMenuItem,
} from './NavbarElements';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../cornellLogo.png';
import './fonts.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <img
          src={Logo}
          alt="Cornell Logo"
          width="180px"
          height="50px"
          style={{ marginRight: 'auto' }}
        />
        <NavIcon onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </NavIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/" onClick={toggleNav}>
            Home
          </NavLink>
          <NavLink to="/tutorials" onClick={toggleNav}>
            Machine Tutorials
          </NavLink>
          <NavLink as="div">
            Opportunities
            <NavSubMenu>
              <NavSubMenuItem to="/coursework" onClick={toggleNav}>
                Coursework
              </NavSubMenuItem>
              <NavSubMenuItem to="/events" onClick={toggleNav}>
                Events Calendar
              </NavSubMenuItem>
              <NavSubMenuItem to="/outreach" onClick={toggleNav}>
                K-5 Outreach
              </NavSubMenuItem>
              <NavSubMenuItem to="/interns" onClick={toggleNav}>
                Summer Interns
              </NavSubMenuItem>
              <NavSubMenuItem to="/artistProgram" onClick={toggleNav}>
                Art Microgrant
              </NavSubMenuItem>
            </NavSubMenu>
          </NavLink>
          <NavLink as="div">
            Project Showcase
            <NavSubMenu>
              <NavSubMenuItem to="/studentProjects" onClick={toggleNav}>
               Student Projects
              </NavSubMenuItem>
              <NavSubMenuItem to="/projects/roosevelt" onClick={toggleNav}>
                Roosevelt Island Seniors Projects
              </NavSubMenuItem>
            </NavSubMenu>
          </NavLink>
          <NavLink as="div">
            About
            <NavSubMenu>
              <NavSubMenuItem to="/about" onClick={toggleNav}>
                Team
              </NavSubMenuItem>
              <NavSubMenuItem to="/about/future" onClick={toggleNav}>
                Future Plans
              </NavSubMenuItem>
            </NavSubMenu>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
