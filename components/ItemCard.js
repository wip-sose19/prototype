import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 2rem 4rem;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${props => props.theme.primary};
	border-radius: 3px;
	h3 {
		font-size: 2rem;
	}
	p {
		font-size: 1.4rem;
	}
	button {
		background: #fff;
		color: ${props => props.theme.primary};
		padding: 1rem 2rem;
		font-size: 1.4rem;
		border-radius: 3px;
		cursor: pointer;
		:hover {
			background: ${props => props.theme.border};
		}
	}
`;

class ItemCard extends Component {
	render() {
		return (
			<Card>
				<h3>Name</h3>
				<p>Vorhanden 20</p>
				<button>Auffüllen</button>
				{/* <div>
					<p>Hinzugekommene Anzahl:</p>
					<input type="number" />
				</div> */}
			</Card>
		);
	}
}

export default ItemCard;
