import React from "react";
import ReactDom from "react-dom/client";
console.log(React);
console.log(ReactDom);

// let h1 = document.createElement("h1");
// h1.innerHTML = "I am a h1 tag";
// console.log(h1);

// let reactH1 = React.createElement("h1", null, "I am a h1 tag");
// console.log(reactH1);

// let p = React.createElement(
//   "p",
//   null,
//   React.createElement("i", null, "I am a para tag"),
// );
// let section = React.createElement("section", null, reactH1, p);

let section = React.createElement(
  "section",
  null,
  React.createElement("h1", null, "I am a h1 tag"),
  React.createElement(
    "p",
    null,
    React.createElement("i", null, "I am a para Tag"),
  ),
);
let name = "React";
ReactDom.createRoot(document.getElementById("root")).render(
  // <React.Fragment>
  //     <h1>I am a h1 tag</h1>
  //     <p>
  //         <i>I am a para tag</i>
  //     </p>
  // </React.Fragment>

  <>
    <h1>I am a h1 tag</h1>
    <p className="para">
      <i>I am a para tag</i>
    </p>
    <mark>{18 - 2}</mark>
    <label htmlFor="">email</label>
  </>,
);
