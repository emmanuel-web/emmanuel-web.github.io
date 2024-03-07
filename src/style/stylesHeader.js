// styles.js
import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #3498DB;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  margin: 0;
`;
