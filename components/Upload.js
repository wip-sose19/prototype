import React, { Component } from 'react';
import UploadForm from './UploadForm';
import { Logo } from './Header';

class Upload extends Component {
	render() {
		return (
			<>
				<Logo>Artikel hochladen</Logo>
				<UploadForm />
			</>
		);
	}
}

export default Upload;
