import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import App from '../App';
import MainFrame from './MainFrame';
import TimeRegistration from './TimeRegistration'
import MileRegistration from './MileRegistration'
import HistoryPage from './HistoryPage'

const Routes = (props) => (
  <BrowserRouter {...props}>
  	<App>
    	<Route exact path="/" component={MainFrame} />
    	<Route path="/registerTime" component={TimeRegistration} />
    	<Route path="/registerMiles" component={MileRegistration} />
    	<Route path="/history" component={HistoryPage} />
  	</App>
  </BrowserRouter>
);

export default Routes;