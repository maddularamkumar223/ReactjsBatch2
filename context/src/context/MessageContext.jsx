import { createContext } from "react";

export let messageContext = createContext();

let MessageProvider = ({ children }) => {
  let message = "I am a Message Provider";
  let message1 = "Hello dsknljhdsf";
  return (
    <messageContext.Provider value={{ message, message1 }}>
      {children}
    </messageContext.Provider>
  );
};

export default MessageProvider;
