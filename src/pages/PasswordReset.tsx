import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
    return (
        <div className=" w-96 mx-auto">
            <div className=" mt-40">
                <h2 className="text-2xl font-bold leading-normal font-poppins text-textprimary mb-2 ">
                    Reset your Password
                </h2>
                <p className="text-base text-textsecondary">
                    Enter your email to reset your password
                </p>
            </div>
            <form className="mt-6">
                <div>
                    <label className="text-sm font-medium mb-2 inline-block">
                        Email*
                    </label>
                    <input
                        type="email"
                        className="w-full border border-solid border-[#E0E5F2] rounded-md py-4 px-4"
                        placeholder="mail@simmmple.com"
                    />
                </div>

                <button className="bg-primary text-white rounded-md w-full py-4 text-sm font-medium mt-6">
                    Reset
                </button>
                <div className="text-sm font-medium text-textsecondary mt-2 hover:text-primary">
                    <Link to="/signin">Sign In</Link>
                </div>
                <div className="text-sm font-medium text-textsecondary mt-2 hover:text-primary">
                    <Link to="/signup">Create and Account</Link>
                </div>
            </form>
        </div>
    );
};

export default PasswordReset;
