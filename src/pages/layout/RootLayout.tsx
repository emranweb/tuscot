import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { ReactElement } from "react";

const RootLayout = (): ReactElement => {
    return (
        <div className="flex">
            <div className="w-1/5 bg-white">
                <Sidebar />
            </div>
            <div className="w-4/5 bg-dashboard h-screen pl-8">
                <Topbar />
                {<Outlet />}
            </div>
        </div>
    );
};

export default RootLayout;
