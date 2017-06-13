import React, { Component } from 'react';
import Boxes from './Boxes';

class MainFrame extends Component {
	render() {
		return(
			<div className="col-sm-8">
				<Boxes />
			</div>
		);
	}
}
export default MainFrame;
