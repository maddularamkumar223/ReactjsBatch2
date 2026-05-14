import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Route";
import AuthProvider from "./context/auth/Auth";
import JobProvider from "./context/JobContext";

createRoot(document.getElementById("root")).render(
  <JobProvider>
    <AuthProvider>
      <RouterProvider router={Routes}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </JobProvider>,
);
