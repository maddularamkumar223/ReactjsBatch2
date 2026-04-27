import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./context/messageContext";

createRoot(document.getElementById("root")).render(
  <MessageProvider>
    <App />
  </MessageProvider>,
);

// ! It is used to avoid the prob drilling
// ! W need to use the context for  theme change and login pages and api handling.
// ! When you are using the context you can avoid the extra rendering.
