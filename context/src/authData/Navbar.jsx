import { useContext } from "react";
import { loginContext } from "./LoginContext";

const Navbar = () => {
  let { updateUser, logout } = useContext(loginContext);
  return (
    <div>
      <button
        onClick={() => {
          updateUser("Ram");
        }}
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
