import React from "react";
// import "./index.css";
import Parent from "./components/Parent";
import NavComtainer from "./components/navbar/NavComtainer";
import "./global.css";

const App = () => {
  return (
    <div>
      {/* <p>I am a app component</p>
      <Parent /> */}
      <NavComtainer />
      <nav>I am a navbar</nav>
    </div>
  );
};

export default App;
