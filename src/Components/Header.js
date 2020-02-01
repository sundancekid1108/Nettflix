import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Search } from "assets/search.svg";

const Header = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0px 20px;
  padding-top: 15px;
  display: flex;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  height: 45px;
  svg {
    fill: white;
    height: 15px;
  }
`;
const List = styled.div``;
const NavLink = styled(Link)`
  color: white;
  width: 80px;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  border-bottom: ${props =>
    props.selected ? "5px solid #3498db" : "5px solid transparent"};
  transition: border-bottom 0.5s ease-in-out;
  padding-bottom: 10px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <NavLink selected={pathname === "/"} to="/">
      Movies
    </NavLink>
    <NavLink selected={pathname === "/tv"} to="/tv">
      TV
    </NavLink>
    <NavLink selected={pathname === "/search"} to="/search">
      Search
    </NavLink>
  </Header>
));

/**
 * 
 */