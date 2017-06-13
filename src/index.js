import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/routes';
import { browserHistory } from 'react-router-dom';

ReactDOM.render( 
	<Routes history={browserHistory} />,
	document.getElementById('root')
);
