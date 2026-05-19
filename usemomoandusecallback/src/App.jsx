// import { useMemo, useState } from "react";

// import JobFiltering from "./component/JobFiltering";
import UseCallBack from "./component/useCallBack/UseCallBack";

// const App = () => {
//   let [count, setCount] = useState(0);
//   let [theme, setTheme] = useState(false);

//   let multipleBy10 = () => {
//     console.log("Calculating with normal function....");
//     return count * 10;
//   };

//   let mulpleBy10Momo = useMemo(() => {
//     console.log("Calculating with momo ...");
//     return count * 10;
//   }, [count]);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>

//       <p>{theme === true ? "Theme Changed" : "Not Changed"}</p>
//       <button onClick={() => setTheme(!theme)}>Theme Change</button>

//       <p>Multiple By 10 with function :{multipleBy10()}</p>
//       <p>Multiple By 10 with momo :{mulpleBy10Momo}</p>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div>
      {/* <JobFiltering /> */}
      <UseCallBack />
    </div>
  );
};

export default App;
