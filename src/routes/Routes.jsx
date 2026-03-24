import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import Installation from "../pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/data.json"),
        Component: Apps,
      },
      {
        path: "/apps/:id",
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();
          const app = data.find((a) => String(a.id) === params.id);
          return app;
        },
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/data.json"),
        Component: Installation,
      },
    ],
  },
]);
