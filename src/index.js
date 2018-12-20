import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Umm from '../routes/api/';
import registerServiceWorker from './registerServiceWorker';

const PLAYERS = [
	{
		name: "Ratthew",
		score: 420,
		id: 1,
	},
	{
		name: "Garland",
		score: 69,
		id: 2,
	},
	{
		name: "Andrea",
		score: 100,
		id: 3,
	},
	{
		name: "Bruder",
		score: 100,
    	id: 4,
  },
  {
		name: "J Guevara",
		score: 100,
    	id: 5,
  },
];

ReactDOM.render(<App players={PLAYERS}/>, document.querySelector('#root'));
registerServiceWorker();