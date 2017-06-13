import React, { Component } from 'react';
import DropdownInput from './DropdownInput';
import * as _ from 'underscore';
export interface TimeRegistrationProps {}
export interface MyState { input: any, startTimes:[], endTimes:[] }

class TimeRegistration extends Component<TimeRegistrationProps, MyState> {
	constructor(props){
		super(props);
		this.state = {
			input: null,
			startTimes:null,
			endTimes:null
		};
		this.fetchData = this.fetchData.bind(this);
		this.sortTimes = this.sortTimes.bind(this);
	}

	componentDidMount(){
		let data = this.fetchData();
		setTimeout(() =>{
			this.setState({input: data});
			this.sortTimes();
		}, 500);
	}

	fetchData() {
		let list = [];
		fetch("http://localhost:8000/getTimes", {
			headers: {'Content-type':'application/json'},
		})
		.then((response) => response.json())
		.then((responseJson: any) => {
			responseJson.items.forEach((item) => {
				list.push(item);
			});
		})
		return list
	};

	sortTimes(){
		let startTimes = null;
		let endTimes = null;
		let list = _.clone(this.state.input);
		startTimes = list[0].startTimes;
		endTimes = list[1].endTimes;
		this.setState({startTimes: startTimes, endTimes: endTimes});
	}

	render() {
		return(
			<div className="col-lg-8">
				<DropdownInput input={this.state.startTimes} />
				<DropdownInput input={this.state.endTimes} />
			</div>
		);
	}
}
export default TimeRegistration;
