import React from "react";
import { NavLink } from "react-router-dom";

type NavbarIteProps = {
  icon?: JSX.Element;
  text: string;
  link: string;
};

const NavbarItem = ({ icon, text, link }: NavbarIteProps) => {
  return (
    <li className="flex items-center">
      <span className="">{icon}</span>
      <NavLink
        className={(isActive) =>
          isActive ? "navbar-link-active" : "navbar-link"
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavbarItem;

// Active Item
{
  /* <li className="py-2 flex items-center after:content-[''] relative after:absolute after:right-[-20px]  after:w-[4px] after:rounded-sm after:bg-primary after:h-full">
<span className="text-primary text-[20px] mr-2">
  <AiFillHome />
</span>
<NavLink
  to="/"
  className="font-poppins text-base text-textprimary font-medium "
>
  Dashboard
</NavLink>
</li> */
}
