import React, { Component } from "react";
// import Child from "./Child";
// import Contur from "./Contur";
// import Counter2 from "./Counter2";
import Function from "./functionProps/Function";
import CounterParent from "./functionProps/CounterParent";

export default class Parent extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0,
  //   };
  //   this.add = () => this.setState({ count: this.state.count + 1 });
  //   this.sub = () => this.setState({ count: this.state.count - 1 });
  // }
  // personDetails = {
  //   place: "Hyd",
  //   area: "KPHB",
  //   skills: ["1", 2, 3],
  // };

  names = ["ram", "ravi", "raghu", "Kumari"];
  render() {
    return (
      <div>
        {/* <Child name="Ram" age={25} personDetails={this.personDetails} />
        <Contur count={this.state.count} add={this.add} sub={this.sub} />
        <Counter2 count={this.state.count} add={this.add} sub={this.sub} /> */}
        {/* <Function name="ram" />
        <Function name="Ravi" />
        <Function name="Raghu" /> */}

        {/* {this.names.map((value) => {
          return <Function name={value} />;
        })} */}

        <CounterParent />
      </div>
    );
  }
}
