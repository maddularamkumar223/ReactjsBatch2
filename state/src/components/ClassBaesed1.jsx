import React, { Component } from "react";

export default class ClassBaesed1 extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          name: "Siri",
          age: 64,
        },
        {
          name: "Ram",
          age: 65,
        },
        {
          name: "Ravi",
          age: 63,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <>
              <h1>Name: {user.name}</h1>
              <p>Age: {user.age}</p>
              <button>Click Here</button>
            </>
          );
        })}
      </div>
    );
  }
}
