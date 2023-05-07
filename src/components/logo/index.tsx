import React from "react";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
