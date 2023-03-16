import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className=" text-center py-10 border-b border-solid border-[#F4F7FE] mb-10">
                <h4 className="text-[26px] leading-normal font-poppins font-bold">
                    HORIZON <span className="font-normal">FREE</span>
                </h4>
            </div>
            <div className="navar">
                <ul className="flex flex-col py-10 px-5 gap-4">
                    <li className="py-2 flex items-center after:content-[''] relative after:absolute after:right-[-20px]  after:w-[4px] after:rounded-sm after:bg-primary after:h-full">
                        <span className="text-primary text-[20px] mr-2">
                            <AiFillHome />
                        </span>
                        <NavLink
                            to="/"
                            className=" font-poppins text-base text-textprimary font-medium "
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#A3AED0]  text-[20px] mr-2">
                            <BiLinkExternal />
                        </span>
                        <NavLink
                            className=" font-poppins text-base text-[#A3AED0] font-medium "
                            to="/"
                        >
                            Tables
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#A3AED0]  text-[20px] mr-2">
                            <BiLinkExternal />
                        </span>
                        <NavLink
                            className=" font-poppins text-base text-[#A3AED0] font-medium "
                            to="/"
                        >
                            Kanban
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#A3AED0]  text-[20px] mr-2">
                            <BiLinkExternal />
                        </span>
                        <NavLink
                            className=" font-poppins text-base text-[#A3AED0] font-medium "
                            to="/"
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#A3AED0]  text-[20px] mr-2">
                            <BiLinkExternal />
                        </span>
                        <NavLink
                            className=" font-poppins text-base text-[#A3AED0] font-medium "
                            to="/signin"
                        >
                            SignIn
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className="footer"></div> */}
        </div>
    );
};

export default Sidebar;
