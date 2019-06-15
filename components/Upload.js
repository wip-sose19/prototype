import React, { Component } from 'react';
import UploadForm from './UploadForm';

class Upload extends Component {
	render() {
		return (
			<>
				<h3>Artikel hochladen</h3>
				<UploadForm />
			</>
		);
	}
}

export default Upload;
