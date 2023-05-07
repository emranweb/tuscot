import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { register, watch, formState, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className=" w-96 mx-auto">
      <div className="mt-10 text-textsecondary  gap-2">
        <Link to="/" className="flex items-center">
          <AiOutlineLeft /> Back to dashboard
        </Link>
      </div>
      <div className=" mt-40">
        <h2 className="text-4xl font-bold leading-normal font-poppins text-textprimary mb-2 ">
          Sign In
        </h2>
        <p className="text-base text-textsecondary">
          Enter your email and password to sign in!
        </p>
        <button className="btn  btn-outline w-full my-4">
          <FcGoogle className="text-2xl" /> Sign in with Google
        </button>
      </div>
      <form className="mt-6">
        <div>
          <label className="block">Email*</label>
          <input
            type="email"
            className="input input-bordered w-full "
            placeholder="mail@simmmple.com"
          />
        </div>
        <div className="mt-6">
          <label className="text-sm font-medium mb-2 inline-block">
            Password*
          </label>
          <input
            type="password"
            className="input input-bordered w-full "
            placeholder="*****"
          />
        </div>
        <button className="btn btn-primary w-full my-4">Sign in</button>
        <div className="flex flex-col gap-y-2">
          <Link className="link link-default" to="/passwordreset">
            Forget password?
          </Link>
          <Link className="link link-default" to="/signup">
            Create and Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
