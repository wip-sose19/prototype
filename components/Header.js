import React from 'react';
import styled from 'styled-components'; // für styling verwenden
import Navbar from './NavBar';

const StyledHeader = styled.header`
	display: flex;
	width: 100%;
	justify-content: space-between;
	background: #bdc3c7;
	align-items: center;
	margin-bottom: 2rem;
`;

export const Logo = styled.h3`
	font-size: 4rem;
	font-weight: 500;
	margin: 0 3rem;
	text-align: center;
`;

const Header = props => (
	//  Styling ( hauptsächlich anordnung der Elemente ) stimmt noch nicht
	<StyledHeader>
		{/* Logo fehlt noch styling */}
		<Logo>Logo</Logo>
		{/* Navbar ist eine eigene Komponente die erstellt und importiert werden muss */}
		<Navbar />
	</StyledHeader>
);

export default Header;
