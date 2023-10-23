import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Layout from "./layouts";
import Contact from "./pages/Contact";

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
    ],
  },
]);
