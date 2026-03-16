import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
