import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Copy from "../../data/Copy";
const Nav = styled.nav`
  position: absolute;
  display: flex;
  width: calc(100% - 40px);
  max-width: 80%;
  height: 40px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  @media screen and (max-width: 662px) {
    max-width: 100%;
    flex-direction: column;
    left: initial;
    transform: initial;
  }
`;

const NavList = styled.ul`
  display: flex;
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
  a {
    color: white;
    text-decoration: none;
  }
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
