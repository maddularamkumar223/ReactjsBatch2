import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import routes from "./route/Route";
// import ProductProvider from "./comtext/ProductContext";
// import routes from './route/Route';
// createRoot(document.getElementById("root")).render(
//   <ProductProvider>
//     <App />
//   </ProductProvider>,
// );

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>,
);

// ! Routing is used to redirect from one page another page without reloading the page.
// ! React will not support for the route due to that reason we need install the libraries
// ! react-router-dom
