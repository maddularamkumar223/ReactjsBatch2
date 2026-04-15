import React from "react";
import Child from "./Child";
import Ram from "./parent.module.css";

const Parent = () => {
  return (
    <div>
      <p className={Ram.para} id="paraTag">
        {" "}
        I am a parent Component
      </p>
      <Child />
    </div>
  );
};

export default Parent;
