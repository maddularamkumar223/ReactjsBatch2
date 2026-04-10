import React from "react";

class ClassBased extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Siri",
      age: 64,
    };
  }
  render() {
    return (
      <>
        <h1>My name is {this.state.name}</h1>
        <p>Age: {this.state.age}</p>
      </>
    );
  }
}
export default ClassBased;
