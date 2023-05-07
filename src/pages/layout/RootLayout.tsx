import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const RootLayout = () => {
  return (
    <div className="flex">
      <div className="w-2/12 bg-white">
        <Sidebar />
      </div>
      <div className="w-full bg-dashboard h-screen ">
        <Topbar />
        {<Outlet />}
      </div>
    </div>
  );
};

export default RootLayout;
