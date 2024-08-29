import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  background: #fff; /* Black background */
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  z-index: 1000; /* Ensure the navbar is above other content */
  padding: 0 20px;
  margin-top:10px;
`;

export const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 0 2rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  font-style: normal;
  position: relative;
  margin-right: 50px;
  &:hover {
    color: #a42727; /* Coral color for hover effect */
  }
  @media screen and (max-width: 768px) {
    margin-right:0px;
  }
`;

export const NavIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 20px; /* Align the NavIcon to the right side */
    transform: translate(0%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 2; /* Ensure the NavIcon is above the Logo */
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
    background: #fff; /* Fixed color code */
    color: #000; /* Ensure text color contrasts well */
    justify-content: flex-start; /* Align the menu items to the left */
  }
`;

export const NavSubMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%; /* Align submenu directly below the NavLink */
  left: 0;
  z-index: 1;
  ${NavLink}:hover & {
    display: block;
  }
`;

export const NavSubMenuItem = styled(Link)`
  color: #000;
  background: #fff; /* White background for submenu items */
  font-family: 'Poppins', sans-serif;
  padding: 0.5rem 1rem; /* Add horizontal padding to avoid overlap */
  text-decoration: none;
  display: block;
  white-space: nowrap; /* Prevents text from wrapping */
  &:hover {
    background: #080808; /* Dark background on hover */
    color: #fff;
  }
`;

export const ToggleButton = styled.div`
  display: inline-block;
  margin-left: 0.5rem;
  cursor: pointer;
`;
