import { useContext } from "react";
import { loginContext } from "./LoginContext";

const HomePage = () => {
  let { user } = useContext(loginContext);
  return <div>{user === null ? "Login First!" : `Hello ${user}`}</div>;
};

export default HomePage;
