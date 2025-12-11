import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MyLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 mx-auto my-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MyLayout;
