import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: rgba(234, 227, 219, 0.8); /* Changed color to black */
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  z-index: 1000; /* Ensure the navbar is above other content */
  padding: 0 20px;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-family: 'Segoe UI';
  // "Mate SC", serif; 
  position: relative;
  &:hover {
    color: #880808;
  }
`;

export const NavIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background: rgba(234, 227, 219, 0.8); /* Changed color to black */
    color: #000;
  }
`;

export const NavSubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%; /* Align submenu directly below the NavLink */
  left: 0;
  background: rgba(234, 227, 219, 0.8); /* Changed color to black */
  z-index: 1;
  ${NavLink}:hover & {
    display: block;
  }
`;

export const NavSubMenuItem = styled(Link)`
  color: #000;
  font-family: "Roboto", serif; /* Using Playfair Display */
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
  white-space: pre-line; /* Prevents text from wrapping */
  &:hover {
    background: #880808;
    color: #fff;
  }
`;

export const ToggleButton = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  cursor: pointer;
`;
