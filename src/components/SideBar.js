import React, {	Component } from 'react';
import * as _ from 'underscore';
import { Link } from 'react-router-dom';

interface myState {route:string}
class SideBar extends Component {

	linkSwitch(link){
		let newState = link;
		this.setState({route: newState});
	}

	renderMenu() {
			let menuData = [{
				header: 'Översikt',
				link: ''
			}, {
				header: 'Registrera tid',
				link: 'registerTime'
			}, {
				header: 'Milrapportering',
				link: 'registerMiles'
			}, {
				header: 'Arkiv',
				link: 'history'
			}];

			let menu = _.map(menuData, item => {
				return(
				<li key={item['link']} onClick={(e) => {this.linkSwitch(item['link'])}}>
				<Link to={'/'+item['link']}>{item['header']}</Link>
				</li>
				)
			});
		return menu
	}

	render(){
		return(
			<ul className="nav nav-pills nav-stacked">
			{this.renderMenu()}
			</ul>
		);
	}
}
export default SideBar
