import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  personDetails = {
    place: "Hyd",
    area: "KPHB",
    skills: ["1", 2, 3],
  };
  render() {
    return (
      <div>
        <Child name="Ram" age={25} personDetails={this.personDetails} />
      </div>
    );
  }
}
