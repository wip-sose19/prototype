import React from "react";
import styled from "styled-components"; // für styling verwenden

const StyledNavBar = styled.nav`
  background-color: white;
  font-size: 1.4rem;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #bdc3c7;
  padding: 2rem 0;
  a:link,
  a:visited {
    background-color: #9b59b6;
    color: white;
    padding: 14px 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }

  a:hover,
  a:active {
    background-color: #8e44ad;
  }
`;

const NavBar = props => (
  //  Styling ( hauptsächlich anordnung der Elemente ) stimmt noch nicht
  <StyledNavBar>
    <a href="#">Artikelverzeichnis</a>
    <a href="#">Artikel anlegen</a>
    <a href="#">Pricing</a>
    <a href="#">Terms of use</a>
    <a href="#">Contact</a>
  </StyledNavBar>
);

export default NavBar;
