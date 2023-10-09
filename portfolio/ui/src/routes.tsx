import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Layout from "./layouts";

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
    ],
  },
]);
