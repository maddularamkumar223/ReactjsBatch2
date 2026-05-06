import { useState } from "react";
import LifeCycle from "./component/LifeCycle";

const App = () => {
  let [state, setState] = useState(true);
  return (
    <div>
      <button onClick={() => setState(false)}>CHange State</button>
      {state && <LifeCycle />}
    </div>
  );
};

export default App;
