import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';

const GlobalSyte = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
  }
	*, *:before, *:after {
		box-sizing: inherit;
	}
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const theme = {
  primary: '#8e44ad',
  border: '#bdc3c7',
};

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalSyte />
      <Header />
      <Inner>{props.children}</Inner>
    </>
  </ThemeProvider>
);

export default Page;
