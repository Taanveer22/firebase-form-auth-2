import { createBrowserRouter } from "react-router";
import MyLayout from "../layouts/MyLayout";
import Home from "../components/Home";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default MyRouter;
