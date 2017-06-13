import React, { Component } from 'react';
import * as _ from 'underscore'

class SingleBox extends Component {
	constructor(props){
		super(props);
		this.state = { data: [] };
	}
	
	renderCols(){
		let h4Data = [{
			headline: "Hittills i År",
			paragraph: "1241 timmar"
		}, {
			headline: "Denna Månad",
			paragraph: "40 timmar"
		}, {
			headline: "Förväntat",
			paragraph: "40 timmar"
		}, {
			headline: "Flex",
			paragraph: "0 timmar"
		}];

		let h4s = _.map(h4Data, row => {	
		return(	
				<div className="col-sm-3" key={row['headline']}>
					<div className="well">
						<h4>{row['headline']}</h4>
						<p>{row['paragraph']}</p>
					</div>
				</div>)
		});

		return h4s
	}

	render() {
		return (
				<div className="row">
					{this.renderCols()}
				</div>
		)}
		
}

export default SingleBox
