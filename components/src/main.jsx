import React from "react";
import ReactDom from "react-dom/client";
import ClassBased from "./components/ClassBased";
import ClassBased1 from "./components/ClassBased1";
import FunctionBased from "./components/FunctionBased";
import ArrowBased from "./components/ArrowBased";

ReactDom.createRoot(document.getElementById("root")).render(
  <>
    <h1>I am a React JS</h1>
    {/* <ClassBased></ClassBased> */}
    <ClassBased />
    <ClassBased1 />
    <FunctionBased />
    <ArrowBased />
  </>,
);
