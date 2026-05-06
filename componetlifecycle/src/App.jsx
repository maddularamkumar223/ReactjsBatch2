import { useState } from "react";
import Lifecycle from "./component/Lifecycle";

const App = () => {
  let [state, setState] = useState(true);
  return (
    <div>
      <button onClick={() => setState(false)}>Click me</button>
      {state && <Lifecycle color={"blue"} number={5} />}
    </div>
  );
};

export default App;
