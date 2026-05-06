import { Component } from "react";

export default class Lifecycle extends Component {
  constructor() {
    super();
    // console.log("I am a constructor method");
    this.state = {
      count: 0,
      color: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    // console.log("I am a getDerived State From Props");
    // console.log(props);
    console.log(state);
    // return { color: props.color };
  }

  componentDidMount() {
    console.log("I am a component Did Mount");
    setTimeout(() => {
      document.getElementById("h1").innerHTML = "Hello";
      this.setState({ color: "blue" });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("I am a component Did Update");
    document.getElementById("h1").innerHTML = `Hello ${this.state.color}`;
  }

  componentWillUnmount() {
    console.log("The component will be unmounted");
    alert("The component is unmounted");
  }
  // ! updating phase

  shouldComponentUpdate() {
    return true;
  }

  render() {
    // console.log("I am a render method");
    return (
      <div>
        <p style={{ color: this.state.color }}>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
        <button>Sub</button>
        <h1 id="h1"></h1>
      </div>
    );
  }
}
