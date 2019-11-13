import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Copy from "../../data/Copy";
const Nav = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const NavList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0px;
  list-style: none;
  a {
    text-decoration: none;
  }
`;

const NavListItem = styled.li`
  padding: 5px 10px;
`;

const Header = () => {
  return (
    <Nav>
      <Logo data={Copy.header.nav.logo} />
      <NavList>
        {Copy.header.nav.items.map(item => (
          <NavListItem>
            <Link to={item.url}>{item.text}</Link>
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Header;
