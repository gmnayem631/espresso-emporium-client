import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
    ],
  },
]);

export default router;
