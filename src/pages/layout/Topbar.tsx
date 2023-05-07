import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import avatar from "/profile-avatar.png";
const Topbar = () => {
    return (
        <div className="pr-8 py-8 flex justify-between flex-wrap bg-white">
            <div className="leftsection">
                <div className="text-xs leading-normal font-normal text-textsecondary">
                    Pages / Dashboard
                </div>
                <h5 className=" font-poppins font-bold text-4xl leading-normal text-textprimary tracking-tighter">
                    Main Dashboard
                </h5>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 gap-4">
                <div className="serch">
                    <input
                        type="text"
                        placeholder="search"
                        className="bg-[#F4F7FE] h-10 rounded-[40px] p-2"
                    />
                </div>
                <div className="flex gap-5 text-xl text-textsecondary cursor-pointer">
                    <AiOutlineBell />
                    <BsFillMoonFill />
                    <BiErrorCircle />
                </div>
                <div className="w-10 h-10">
                    <img
                        src={avatar}
                        alt="profile avatar"
                        className="rounded-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
