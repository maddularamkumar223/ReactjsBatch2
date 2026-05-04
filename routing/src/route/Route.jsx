import { createBrowserRouter } from "react-router-dom";
import Home from "../newRouting/Home";
import Contact from "../newRouting/Contact";
import About from "../newRouting/About";
import Layout from "../newRouting/Layout";
import NewProductData from "../newRouting/NewProductData";
import NewMen from "../newRouting/NewMen";
import Women from "../newRouting/Women";
import Kids from "../newRouting/Kids";
import NewSingleProduct from "../newRouting/NewSingleProduct";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/newProducts",
        element: <NewProductData />,
        children: [
          {
            index: true,
            element: <NewMen />,
          },
          {
            path: "/newProducts/women",
            element: <Women />,
          },
          {
            path: "/newProducts/kids",
            element: <Kids />,
          },
        ],
      },
      {
        path: "/newSingleProduct/:id",
        element: <NewSingleProduct />,
      },
    ],
  },
]);
export default routes;
