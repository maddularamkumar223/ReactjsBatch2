import { createContext } from "react";

export let messageContext = createContext();

let MessageProvider = ({ children }) => {
  let message = "I am a Message Provider"; 
  return (
    <messageContext.Provider value={message}>
      {children}
    </messageContext.Provider>
  );
};

export default MessageProvider;
