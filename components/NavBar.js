import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components'; // für styling verwenden
import { loadDB } from '../lib/db';

const StyledNavBar = styled.nav`
  background-color: white;
  font-size: 1.4rem;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: none;
  padding: 2rem 0;
  a,
  button {
    background-color: #9b59b6;
    color: white;
    padding: 14px 50px;
    margin: 0 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }

  a:hover,
  a:active {
    background-color: #8e44ad;
  }
`;

const NavBar = () => (
  //  Styling ( hauptsächlich anordnung der Elemente ) stimmt noch nicht
  <StyledNavBar>
    <Link href="/add">
      <a>Artikel anlegen</a>
    </Link>
    <button
      type="button"
      onClick={async () => {
        const firebase = await loadDB();
        await firebase.auth().signOut();
        Router.push({ pathname: '/login' });
      }}
    >
      Abmelden
    </button>
  </StyledNavBar>
);

export default NavBar;
