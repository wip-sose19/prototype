import React from 'react';
import styled from 'styled-components'; // für styling verwenden

const Header = props => (
	//  Styling ( hauptsächlich anordnung der Elemente ) stimmt noch nicht
	<header>
		{/* Logo fehlt noch styling */}
		<h3>Logo</h3>
		{/* Navbar ist eine eigene Komponente die erstellt und importiert werden muss */}
		<div>Navbar</div>
	</header>
);

export default Header;
