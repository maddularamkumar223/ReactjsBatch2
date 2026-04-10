// import React from "react";
// import FunctionChild from "./FunctionChild";

// const Function = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <FunctionChild name={props.name} />
//     </div>
//   );
// };

// export default Function;
import React from "react";
import FunctionChild from "./FunctionChild";

const Function = ({ name }) => {
  console.log(name);
  return (
    <div>
      <FunctionChild name={name} />
    </div>
  );
};

export default Function;
