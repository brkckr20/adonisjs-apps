import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Layout from "./layouts";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add",
        element: (
          <ProtectedRoutes>
            <div>Lorem</div>
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);
