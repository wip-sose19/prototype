import React from "react";
import styled from "styled-components"; // für styling verwenden

const StyledNavBar = styled.nav`
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #bdc3c7;
  padding: 2rem 0;

  a {
    text-decoration: none;
    color: #8e44ad;
  }
`;

const NavBar = props => (
  //  Styling ( hauptsächlich anordnung der Elemente ) stimmt noch nicht
  <StyledNavBar>
    <a href="#">Home</a>

    <a href="#">About</a>

    <a href="#">Pricing</a>

    <a href="#">Terms of use</a>

    <a href="#">Contact</a>
  </StyledNavBar>
);

export default NavBar;
