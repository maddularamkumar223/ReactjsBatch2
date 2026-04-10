import React, { Component } from "react";

export default class Counter2 extends Component {
  render() {
    return (
      <div>
        <h1>Counter 2</h1>
        <p>{this.props.count}</p>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.sub}>Sub</button>
      </div>
    );
  }
}
