import { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
    console.log("I am a constructor method");
    this.state = {
      count: 0,
      color: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("I am a getDerived State From Props");
    // console.log(props);
    // console.log(state);
    return { color: props.color };
  }

  componentDidMount() {
    console.log("I am a component Did Mount");
  }
  render() {
    console.log("I am a render method");
    return (
      <div>
        <p style={{ color: this.state.color }}>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <button>Sub</button>
      </div>
    );
  }
}
