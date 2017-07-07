import React, { Component } from 'react';
import * as _ from 'underscore';

class DropdownInput extends Component {
	constructor(props){
		super(props);
		this.state = {selectedInput:''}
		this.selectInput = this.selectInput.bind(this);
		this.renderInputList = this.renderInputList.bind(this);
	};
	
	selectInput(e){
		e.preventDefault();
		this.setState({selectedInput:e.target.text});
		this.props.onChange(e.target.text);
	}

	renderInputList(){
		let list = _.clone(this.props.input);
		return _.map(list, l => {
			 return <li onClick={this.selectInput} key={l}><a href="#">{l}</a></li>;
			});
	}

	render() {
		return(
			<div className="col-xs-5 col-sm-3 col-md-3 col-lg-3">
				<div className="input-group">
					<div className="input-group-btn">
						<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Välj <span className="caret"></span></button>
						<ul className="dropdown-menu">
							{this.renderInputList()}
						</ul>
					</div>
					<input type="text" className="form-control" aria-label="..." disabled value={this.state.selectedInput}/>
				</div>
			</div>
		);
	}
}
export default DropdownInput;
