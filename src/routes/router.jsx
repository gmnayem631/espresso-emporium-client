import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
    ],
  },
]);

export default router;
