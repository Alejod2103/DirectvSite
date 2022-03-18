import React from 'react';
import logo from '../../images/direcnobg.png'
import { Nav, NavLink, NavIcon, Bars, DirecLogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'> <DirecLogo src={logo} /> </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
