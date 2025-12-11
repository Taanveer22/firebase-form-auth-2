import { createBrowserRouter } from "react-router";
import MyLayout from "../layouts/MyLayout";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default MyRouter;
