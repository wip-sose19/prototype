import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem;
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	label {
		margin-bottom: 2rem;
		font-size: 1.6rem;
		input,
		textarea {
			display: block;
			width: 100%;
			font-size: 1.4rem;
			line-height: 2;
			margin-top: 0.5rem;
			border: 1px solid #ecf0f1;
			border-radius: 4px;
		}
	}
	button {
		padding: 1rem;
		font-size: 1.4rem;
		border: 1px solid #ecf0f1;
		background: #ecf0f1;
		cursor: pointer;
		border-radius: 4px;
	}
`;

class UploadForm extends Component {
	state = {
		title: '',
		description: '',
		price: 0,
		count: 0
	};

	onChange = e => {
		const { value, type, name } = e.target;
		const val = type === 'number' ? parseFloat(value) : value;
		this.setState({
			[name]: val
		});
	};

	render() {
		return (
			<Form>
				<label htmlFor="title">
					Name
					<input
						type="text"
						name="title"
						onChange={this.onChange}
						value={this.state.title}
					/>
				</label>
				<label htmlFor="description">
					Beschreibung
					<textarea
						type="text"
						name="description"
						rows="8"
						onChange={this.onChange}
						value={this.state.description}
					/>
				</label>
				<label htmlFor="price">
					Preis
					<input
						type="number"
						name="price"
						onChange={this.onChange}
						value={this.state.price}
					/>
				</label>
				<label htmlFor="count">
					Anzahl
					<input
						type="number"
						name="count"
						onChange={this.onChange}
						value={this.state.count}
					/>
				</label>
				<button type="submit">Hochladen</button>
			</Form>
		);
	}
}

export default UploadForm;
