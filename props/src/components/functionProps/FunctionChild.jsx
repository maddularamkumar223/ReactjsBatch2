import React from "react";

const FunctionChild = (props) => {
  console.log(props);
  return <div>Hello {props.name} </div>;
};

export default FunctionChild;
