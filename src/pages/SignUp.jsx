import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className=" w-96 mx-auto">
            <div className="mt-10 text-textsecondary ">
                <Link to="/" className="flex items-center gap-2">
                    <AiOutlineLeft /> Back to dashboard
                </Link>
            </div>
            <div className=" mt-40">
                <h2 className="text-4xl font-bold leading-normal font-poppins text-textprimary mb-2 ">
                    Sign Up
                </h2>
                <p className="text-base text-textsecondary">
                    Enter your email and password to sign in!
                </p>
                <button className="bg-dashboard rounded-xl w-full py-4 text-sm font-medium mt-6 flex gap-2 justify-center items-cente">
                    <FcGoogle className="text-2xl" /> Sign in with Google
                </button>
            </div>
            <form className="mt-6">
                <div>
                    <label className="text-sm font-medium mb-2 inline-block">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        className="w-full border border-solid border-[#E0E5F2] rounded-md py-4 px-4"
                        placeholder="John Deo"
                    />
                </div>

                <div className="mt-6">
                    <label className="text-sm font-medium mb-2 inline-block">
                        Email*
                    </label>
                    <input
                        type="email"
                        className="w-full border border-solid border-[#E0E5F2] rounded-md py-4 px-4"
                        placeholder="mail@simmmple.com"
                    />
                </div>
                <div className="mt-6">
                    <label className="text-sm font-medium mb-2 inline-block">
                        Password*
                    </label>
                    <input
                        type="password"
                        className="w-full border border-solid border-[#E0E5F2] rounded-md py-4 px-4"
                        placeholder="*****"
                    />
                </div>
                <button className="bg-primary text-white rounded-md w-full py-4 text-sm font-medium mt-6">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;
