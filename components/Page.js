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
	primray: '#8e44ad'
};

const Page = props => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalSyte />
			<Header />
			{props.children}
		</>
	</ThemeProvider>
);

export default Page;
