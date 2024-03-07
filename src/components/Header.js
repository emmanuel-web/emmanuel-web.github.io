import React from 'react';
import { Navbar,NavItem,Logo } from '../style/stylesHeader';
function Header() {
  return (
    <header>
      <Navbar>
        <Logo>Emmanuel</Logo>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Projects</NavItem>
        <NavItem href="#">Skills</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Navbar>
    </header>
  );
}

export default Header;