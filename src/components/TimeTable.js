import React, { Component } from 'react';
import * as _ from 'underscore';

class TimeTable extends Component {
	constructor(props){
		super(props);

		let weekNum = this.props.weekNum;
		let dayNames = ["måndag", "tisdag", "onsdag", "torsdag", "fredag"];
		this.state = { dayNames:dayNames,weekNum:weekNum }
	}

calcTotal(){
	let dayNames = this.state.dayNames;
    return _.map(dayNames, d => {
            return (
                <th key={_.uniqueId()}> 0 </th>
            )
        }
    );
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
	let values = _.map(dayNames, () => {
		return(
			<td key={_.uniqueId()}> - </td>
			)}
		);
	return values;
}
	
render() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading"> Vecka <strong>{this.props.onChange()}</strong></div>
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
								Slut
							</td>
							{this.populateRows("end")}
						</tr>
						<tr>
							<td>
								Lunch
							</td>
							{this.populateRows("break")}
						</tr>
						<tr className="success">
							<th>
								Summa
							</th>
							{this.calcTotal()}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default TimeTable;
