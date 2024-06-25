import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavIcon,
  NavMenu,
  NavSubMenu,
  NavSubMenuItem,
  NavSubMenuContainer,
  ToggleButton
} from './NavbarElements';
import { FaBars, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import Logo from '../../cornellLogo.png' ;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenus({
      ...openSubMenus,
      [menu]: !openSubMenus[menu],
    });
  };

  return (
    <>
      <NavIcon onClick={toggleNav}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </NavIcon> 
      <Nav isOpen={isOpen}>
      <img src={Logo} alt="Cornell Logo" width="180px" height="50px" style={{marginLeft: "70px", marginTop: "10px"}} />

        <NavMenu>
          <NavLink to="/" onClick={toggleNav}>
            Home
          </NavLink>
          <NavLink to="/tutorials" onClick={toggleNav}>
            Machine Tutorials
          </NavLink>
          <NavLink as="div" onClick={() => toggleSubMenu('get-involved')}>
              Opportunities
              <ToggleButton>
                {openSubMenus['get-involved'] ? <FaMinus /> : <FaPlus />}
              </ToggleButton>
            </NavLink>
            <NavSubMenu>
            <NavSubMenuContainer className={openSubMenus['get-involved'] ? 'open' : ''}>
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
                /Art Microgrant
              </NavSubMenuItem>
            </NavSubMenuContainer>
          </NavSubMenu>
    
          <NavSubMenu>
          </NavSubMenu>
          <NavSubMenu>
          <NavLink as="div" onClick={() => toggleSubMenu('projects')}>
              Project Showcase
              <ToggleButton>
                {openSubMenus['projects'] ? <FaMinus /> : <FaPlus />}
              </ToggleButton>
            </NavLink>
            <NavSubMenuContainer className={openSubMenus['projects'] ? 'open' : ''}>
              <NavSubMenuItem to="/projects/student" onClick={toggleNav}>
                Previous Student Projects
              </NavSubMenuItem>
              <NavSubMenuItem to="/projects/roosevelt" onClick={toggleNav}>
                Previous Roosevelt Island Seniors Projects
              </NavSubMenuItem>
            </NavSubMenuContainer>
          </NavSubMenu>

          <NavSubMenu>
            <NavLink as="div" onClick={() => toggleSubMenu('about')}>
              About
              <ToggleButton>
                {openSubMenus['about'] ? <FaMinus /> : <FaPlus />}
              </ToggleButton>
            </NavLink>
            <NavSubMenuContainer className={openSubMenus['about'] ? 'open' : ''}>
              <NavSubMenuItem to="/about" onClick={toggleNav}>
                Meet the Team
              </NavSubMenuItem>
              <NavSubMenuItem to="/about/future" onClick={toggleNav}>
                Future Developments
              </NavSubMenuItem>
            </NavSubMenuContainer>
          </NavSubMenu>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
