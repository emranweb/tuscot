import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <ul className="flex flex-col py-10 px-5 gap-4">
      <NavbarItem icon={<BiLinkExternal />} text="Dashboard" link="/" />
      <NavbarItem icon={<BiLinkExternal />} text="SignIn" link="/signin" />
    </ul>
  );
};

export default Navbar;
