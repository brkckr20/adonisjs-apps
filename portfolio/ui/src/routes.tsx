import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Layout from "./layouts";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "./pages/auth/Home";
import AdminLayot from "./layouts/AdminLayot";
import Skills from "./pages/auth/Skills";
import JobAndEdu from "./pages/auth/JobAndEdu";
import Messages from "./pages/auth/Messages";
import Credential from "./pages/Credential";
import EditJobAndEdu from "./pages/auth/EditJobAndEdu";
import Work from "./pages/Work";
import AdminWork from "./pages/auth/Work";

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
        path: "/credential",
        element: <Credential />,
      },
      {
        path: "/works",
        element: <Work />,
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
            path: "/admin/yetenekler",
            element: (
              <ProtectedRoutes>
                <Skills />
              </ProtectedRoutes>
            ),
          },
          {
            path: "/admin/is-ve-egitim",
            element: (
              <ProtectedRoutes>
                <JobAndEdu />
              </ProtectedRoutes>
            ),
          },
          {
            path: "/admin/is-ve-egitim/:id",
            element: (
              <ProtectedRoutes>
                <EditJobAndEdu />
              </ProtectedRoutes>
            ),
          },
          {
            path: "/admin/mesajlar",
            element: (
              <ProtectedRoutes>
                <Messages />
              </ProtectedRoutes>
            ),
          },
          {
            path: "/admin/projeler",
            element: (
              <ProtectedRoutes>
                <AdminWork />
              </ProtectedRoutes>
            ),
          },
        ],
      },
    ],
  },
]);
