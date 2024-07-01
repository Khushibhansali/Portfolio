import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.9); /* Black background */
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  z-index: 1000; /* Ensure the navbar is above other content */
  padding: 0 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
  &:hover {
    color: #ff6f61; /* Coral color for hover effect */
  }
`;

export const NavIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 20px;
    transform: translate(0%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the NavMenu items */
  width: 100%; /* Full width to allow centering */
  position: relative;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: rgba(0, 0, 0, 0.9); /* Black background */
    color: #fff;
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto; /* Ensure it is aligned properly */
`;

export const NavSubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%; /* Align submenu directly below the NavLink */
  left: 0;
  background: rgba(0, 0, 0, 0.9); /* Black background */
  z-index: 1;
  ${NavLink}:hover & {
    display: block;
  }
`;

export const NavSubMenuItem = styled(Link)`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
  white-space: pre-line; /* Prevents text from wrapping */
  &:hover {
    background: #ff6f61; /* Coral color for hover effect */
    color: #000;
  }
`;

export const ToggleButton = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  cursor: pointer;
`;
