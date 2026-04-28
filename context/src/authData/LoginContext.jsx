import { createContext, useState } from "react";

export let loginContext = createContext();
console.log(loginContext);
let LoginProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  let updateUser = (userName) => {
    setUser(userName);
  };
  let logout = () => {
    setUser(null);
  };
  return (
    <loginContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </loginContext.Provider>
  );
};
export default LoginProvider;
