import { createRoot } from "react-dom/client";
import App from "./App";
import ProductProvider from "./comtext/ProductContext";
createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <App />
  </ProductProvider>,
);

// ! Routing is used to redirect from one page another page without reloading the page.
// ! React will not support for the route due to that reason we need install the libraries
// ! react-router-dom
