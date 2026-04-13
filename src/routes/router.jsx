import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () =>
          fetch("https://espresso-emporium-server-murex.vercel.app/coffees"),
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
          fetch(
            `https://espresso-emporium-server-murex.vercel.app/coffees/${params.id}`,
          ),
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
      {
        path: "/users",
        loader: () =>
          fetch("https://espresso-emporium-server-murex.vercel.app/users"),
        Component: Users,
      },
    ],
  },
]);

export default router;
