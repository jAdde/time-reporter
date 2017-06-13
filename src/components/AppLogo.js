import React, { Component } from 'react';
import logo from '../logo.svg';

class AppLogo extends Component {
render(){

	return(
			<div className="App well">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>React Time Reporter</h2>
				</div>
			</div>
		)
	}
}

export default AppLogo