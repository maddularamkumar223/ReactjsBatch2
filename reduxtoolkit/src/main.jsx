import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store/store";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={Route}>
      <App />
    </RouterProvider>
  </Provider>,
);
