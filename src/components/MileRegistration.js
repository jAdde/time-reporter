import React, { Component } from 'react';

export interface MileRegistrationProps {}
export interface MyState {}

class MileRegistration extends Component<MileRegistrationProps, MyState> {
	constructor(props){
		super(props);
		this.state = {}
	};

	render() {
		return(
			<div className="col-sm-9">
				Hello! MileRegistration
			</div>
		);
	}
}
export default MileRegistration;
