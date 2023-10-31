import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Layout from "./layouts";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/auth/Home";
import AdminLayot from "./layouts/AdminLayot";
import AddUser from "./pages/auth/AddUser";

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
        path: "/admin",
        element: <AdminLayot />,
        children: [
          {
            index: true,
            element: (
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            ),
          },
          {
            path: "/admin/kullanici-ekle",
            element: (
              <ProtectedRoutes>
                <AddUser />
              </ProtectedRoutes>
            ),
          },
        ],
      },
    ],
  },
]);
