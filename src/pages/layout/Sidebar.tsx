import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Logo from "../../components/logo";
import Navbar from "../../components/navbar";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <Logo />
      </div>
      <div className="navar">
        <Navbar />
      </div>
      {/* <div className="footer"></div> */}
    </div>
  );
};

export default Sidebar;
