import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components

const Logo = styled.h1`
  color: #ecf0f1;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin: auto auto auto 0px;
`;
const NavBarContainer = styled.nav`
  background-color: #2c2c2c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const NavItem = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &.active {
    background-color: #7790cc;
  }

`;

const Header: React.FC = () => {
  return (
    <NavBarContainer>
        <Logo>Hotel Booking</Logo>
      <NavItem to="/" end>Home</NavItem>
      <NavItem to="/bookings">Bookings</NavItem>
      <NavItem to="/hotels">Hotels</NavItem>
      <NavItem to="/profile">Profile</NavItem>
    </NavBarContainer>
  );
};

export default Header;
