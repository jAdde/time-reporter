import React, { Component } from 'react';
import * as _ from 'underscore';
export interface TimeTableProps {weekNum:any, onChange:(x:any) => void}
export interface MyState { data:any, input: any, dayNames: [], weekNum:number, days: Object}
import moment from 'moment';

class TimeTable extends Component<TimeTableProps, MyState> {
	constructor(props){
		super(props);
		let data = {
			timestamp_date_created: new Date(),
			timestamp_date_updated: new Date(),
			first_date_in_week: "2017-06-12",
			week_num: "24",
			days: {
				monday: {"start": "08:00", "end": "17:00", "break": 1 },
				tuesday: {"start": "08:00", "end": "17:00", "break": 1 },
				wednesday: {"start": "08:00", "end": "17:00", "break": 1 },
				thursday: {"start": "07:30", "end": "16:00", "break": 0.5 },
				friday: {"start": "07:30", "end": "17:00", "break": 0.5 } }
		}
		let weekNum = this.props.weekNum;
		let dayNames = Object.keys(data["days"]);
		let days = data["days"];
		this.state = { data:data, dayNames:dayNames,weekNum:weekNum, days:days }
	}

onChange(){
	let weekNum = this.props.weekNum;
	this.setState({weekNum:weekNum});
}

calcTotal(){
	let totalHours;
	let dayNames = this.state.dayNames
	let days = this.state.days;

	let values = _.map(dayNames, d => {
		let day = d;
		let startTime = days[day]["start"] !== "" ? moment(days[day]["start"], "HH:mm a") : null;
		let endTime = days[day]["end"] !== "" ? moment(days[day]["end"], "HH:mm a") : null;
		let _break = days[day]["break"]
		totalHours = startTime !== null || endTime !== null ? endTime.diff(startTime, 'hours')-parseFloat(_break,10) : null;
		return(
			<th key={_.uniqueId()}> {totalHours} </th>
			)}
		);
	return values;
}

populateTableHeaders(){
		const capitalize = (text) => {
			return text.charAt(0).toUpperCase() + text.slice(1);
		};
		let dayNames = this.state.dayNames;
		let headers = _.map(dayNames, header => {
			return(
				<th className="col-md-2" key={_.uniqueId()}> {capitalize(header.toString())} </th>
				)}
			);
		return headers;
}

populateRows(val){
	let dayNames = this.state.dayNames
	let days = this.state.days;
	let values = _.map(dayNames, d => {
		let day = d;
		return(
			<td key={_.uniqueId()}> {days[day][val]} </td>
			)}
		);
	return values;
}
	
render() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading"><strong>Vecka {this.props.onChange()} Tidrapport</strong></div>
				<table className="table">
					<thead>
						<tr>
							<th />
							{this.populateTableHeaders()}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Start
							</td>
							{this.populateRows("start")}
						</tr>
						<tr>
							<td>
								End
							</td>
							{this.populateRows("end")}
						</tr>
						<tr>
							<td>
								Break
							</td>
							{this.populateRows("break")}
						</tr>
						<tr className="success">
							<th>
								Total
							</th>
							{this.calcTotal()}
						</tr>
						<tr>
							<td />
							<td />
							<td />
							<td />
							<th>Week Total:</th>
							<td> 40 </td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default TimeTable;
