import React from "react";
import API from '../utils/API';

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {

  constructor(...props){
    super(...props);
  }
  // Setting the initial state of the Counter component
  state = {
    score: this.props.score
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  handleDecrement = () => {
      this.setState({ score: this.state.score - 1});
  }

  increment = player => {
    console.log(player);
    API.increment({id: this.props.id}).then(res => {
      console.log("INCINERATION");
      this.setState({ score: this.state.score +1 });
      // this.loadBurners()
    }).catch(err => console.log(err));
  }

  decrement = player => {
    console.log(player);
    API.decrement({id: this.props.id}).then(res => {
      console.log("INCINERATION");
      this.setState({ score: this.state.score -1})
      // this.loadBurners()
    }).catch(err => console.log(err));
  }

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="text-center">
        {/* <div className="card-header bg-primary text-white">
          <h3 className="card-title"></h3>
        </div> */}
        <div className="card-body text-center">
          <button className="btn btn-success buttn" style={{width: "50px"}} onClick={this.increment}>
            +
          </button>
          <span className="text-center"> {this.state.score}</span>
          <button className="btn btn-danger buttn" style={{width: "50px"}} onClick={this.decrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
