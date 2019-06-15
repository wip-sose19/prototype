import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding: 2rem;
`;

class UploadForm extends Component {
	render() {
		return (
			<Form>
				<label htmlFor="title">
					Name
					<input type="text" name="title" />
				</label>
				<label htmlFor="description">
					Beschreibung
					<input type="text" name="description" />
				</label>
				<label htmlFor="price">
					Preis
					<input type="number" name="price" />
				</label>
				<label htmlFor="count">
					Anzahl
					<input type="number" name="price" />
				</label>
				<button type="submit">Hochladen</button>
			</Form>
		);
	}
}

export default UploadForm;
