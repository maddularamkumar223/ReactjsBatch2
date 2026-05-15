import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Counter from "./../components/Counter";
import Products from "../components/products/Products";
import CartDispaly from "../components/products/CartDispaly";

let Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cartDisplay",
        element: <CartDispaly />,
      },
    ],
  },
]);
export default Route;
