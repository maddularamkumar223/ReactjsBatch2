import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/login/Login";
import Register from "./../components/register/Register";
import JobPosting from "../components/jobPosting/JobPosting";
import HomePage from "../components/homepage/HomePage";

let Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
      {
        path: "/jobPosting",
        element: <JobPosting />,
      },
    ],
  },
]);
export default Routes;
