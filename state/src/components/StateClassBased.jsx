import { Component } from "react";

class StateClassBased extends Component {
  constructor() {
    super();
    this.state = {
      counter: 5,
    };
  }
  render() {
    return (
      <>
        <h1>Counter Value : {this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Add
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Sub
        </button>
      </>
    );
  }
}
export default StateClassBased;
