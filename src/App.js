import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import JSXVariables from "./components/JSXVariables";
import Header from './components/Header';
import Player from './components/Player';
import Counter from './components/Counter';
import API from './utils/API';

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
  }
];


class App extends React.Component {
  constructor(...props) {
    super(...props);
  } 

  state = {
    burners: []
  };

  loadBurners = () => {
    API.getBurners()
      .then( res => {
      console.log(`this is the response: ${res}`);
      this.setState({
        burners: res.data
      })
      console.log(`this is the state: ${this.state.burners}`);
    }).catch(err => console.log(err));
  }

  increment = burner => {
    console.log(burner);
    API.increment({id: burner.id}).then(res => {
      console.log("INCINERATION");
      // this.setState({})
      this.loadBurners()
    }).catch(err => console.log(err));
  }

  decrement = burner => {
    console.log(burner);
    API.decrement({id: burner.id}).then(res => {
      console.log("INCINERATION");
      // this.setState({})
      this.loadBurners()
    }).catch(err => console.log(err));
  }

  componentDidMount(){
    this.loadBurners();
  }

    render() {
      return (
        <div className="scoreboard">
        
        <Header title={this.props.title}/>
      
        <div className="players">
          {/* {this.props.players.map(function(player){ */}
          {this.state.burners.map(function(player){
            return <Player name={player.pname} score={player.score} key={player.id} />
          })}
          {/* <Player {...props.Player}/> */}
        </div>
      </div>
    );
  }
}


// App.propTypes = {
// 	title: React.PropTypes.string,
// 	players: React.PropTypes.arrayOf(React.PropTypes.shape({
// 		name: React.PropTypes.string.isRequired,
// 		score: React.PropTypes.number.isRequired,
// 		id: React.PropTypes.number.isRequired,
// 	})).isRequired,
// };

App.defaultProps = {
	title: "Burn-O-Meter"	
}

export default App;
