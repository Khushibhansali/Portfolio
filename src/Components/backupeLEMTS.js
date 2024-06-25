import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Sidebar = styled.div`
  background: #000;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  z-index: 10;
  transition: width 0.3s ease;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};

  &.active {
    color: #15cdfc;
  }

  span {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
    margin-left: 10px;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
  font-size: 1.5rem;
  display: block;
  cursor: pointer;
  margin-bottom: 1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const NavSubMenu = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavSubMenuItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #333;
  transition: opacity 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
