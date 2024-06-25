import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #780000;
  width: 300px; /* Ensure enough space */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')}; /* Adjusted width */
  transition: left 0.3s ease-in-out;
  z-index: 10;
`;

export const NavIcon = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: #000;
  z-index: 15; /* Ensure it's always on top */
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  width: calc(100% - 2rem); /* Adjusted for padding */
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 3rem; /* Ensures padding below NavIcon */
`;

export const NavSubMenu = styled.div`
  width: 100%;
`;

export const NavSubMenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 2rem;
  display: block;
  background-color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const NavSubMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;

  &.open {
    display: flex;
  }
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  color: #fff;
  font-size: 1.5rem;
  user-select: none;
`;
