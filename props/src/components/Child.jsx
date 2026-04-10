import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super();
    let { name, age, personDetails } = props;
    let { place, area, skills } = personDetails;
    this.name = props.name;
    this.personDetails = props.personDetails;
  }

  render() {
    return (
      <div>
        <p>Hello {this.name}</p>
        <p>AGe: {this.props.age}</p>
        <p>Place {this.personDetails.place}</p>
      </div>
    );
  }
}
