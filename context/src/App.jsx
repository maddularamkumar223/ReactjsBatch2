// import { useContext } from "react";
// import Parent1 from "./components/Parent1";
// import Parent2 from "./components/Parent2";
// import { themeContext } from "./context/ThemeContext";

import HomePage from "./authData/HomePage";
import Navbar from "./authData/Navbar";

// const App = () => {
//   let data = useContext(themeContext);
//   console.log(data.theme);
//   return (
//     <div style={data.themeChange()}>
//       {/* <MessageProvider>
//         <Parent1 name="Ram" />
//         <Parent2 name="Ram" />
//       </MessageProvider> */}
//       <Parent1 name="Ram" />
//       <Parent2 name="Ram" />
//       <button
//         onClick={() => {
//           data.themeChangeValue("dark");
//         }}
//       >
//         Dark
//       </button>
//       <button
//         onClick={() => {
//           data.themeChangeValue("light");
//         }}
//       >
//         Light
//       </button>
//       <button
//         onClick={() => {
//           data.theme === "light"
//             ? data.themeChangeValue("dark")
//             : data.themeChangeValue("light");
//         }}
//       >
//         {data.theme === "light" ? "Dark" : "light"}
//       </button>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
