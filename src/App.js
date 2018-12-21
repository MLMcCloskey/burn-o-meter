import React, { Component } from 'react';
import './App.css';
// import JSXVariables from "./components/JSXVariables";
import Header from './components/Header';
import Player from './components/Player';
// import Counter from './components/Counter';
import API from './utils/API';


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
      this.setState({
        burners: res.data
      })
    }).catch(err => console.log(err));
  }

  increment = player => {
    console.log(player);
    API.increment({id: player.id}).then(res => {
      console.log("INCINERATION");
      // this.setState({})
      this.loadBurners()
    }).catch(err => console.log(err));
  }

  decrement = player => {
    console.log(player);
    API.decrement({id: player.id}).then(res => {
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
          {this.state.burners.map(function(player){
            return <Player name={player.pname} score={player.score} id={player.id} key={player.id}/>
          })}
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
