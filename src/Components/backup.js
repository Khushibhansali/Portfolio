import React, { useState } from 'react';
import {
  Sidebar,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import { NavDropdown } from 'react-bootstrap';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const navBarData = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
    submenu: [
      {
        label: "Meet the Team",
        url: "/team",
      },
      {
        label: "Future Developments",
        url: "/futureDevelopments",
      }
    ]
  },
  {
    label: "Tutorials",
    url: "/tutorials",
    submenu: [
      {
        label: "Machines in Makerspace",
        url: "/",
      },
    ],
  }, {
    label: "Projects",
    url: "/projects",
    submenu: [
      {
        label: "Student Projects",
        url: "/",
      },
      {
        label: "Roosevelt Island Seniors Projects",
        url: "/",
      }
    ]
  }, 
  {
    label: "Get Involved",
    url: "/get-involved",
    submenu: [
      {
        label: "Interns",
        url: "/",
      },
      {
        label: "Coursework",
        url: "/",
      },
      {
        label: "Upcoming Events",
        url: "/",
      },
      {
        label: "Outreach",
        url: "/",
      },
      {
        label: "Artist Internship",
        url: "/",
      }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuShow = (items, isOpen) => {
    return items.map((item, index) => {
      if (item.submenu) {
        return (
          <NavDropdown title={item.label} key={index} className="dropdown-menu-dark dropend">
            {menuShow(item.submenu, isOpen)}
          </NavDropdown>
        );
      } else {
        return (
          <NavLink to={item.url} key={index} isOpen={isOpen}>
            <span>{item.label}</span>
          </NavLink>
        );
      }
    });
  };

  return (
    <>
      <Sidebar isOpen={isOpen}>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuShow(navBarData, isOpen)}
        </NavMenu>
      </Sidebar>
    </>
  );
};

export default Navbar;
