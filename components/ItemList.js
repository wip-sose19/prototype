import React, { Component } from 'react';
import styled from 'styled-components';
import ItemCard from './ItemCard';
import { Logo } from './Header';

const List = styled.div`
	h3 {
		margin: 3rem;
	}
`;

class ItemList extends Component {
	render() {
		return (
			<List>
				<Logo>Aktueller Artikelbestand</Logo>
				<ItemCard />
			</List>
		);
	}
}

export default ItemList;
