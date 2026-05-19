import React from "react";

const Child = ({ demo1 }) => {
  demo1();
  console.log("Child Triggered");
  return <div>Child</div>;
};

export default React.memo(Child);
