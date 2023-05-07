import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/button";

const SignIn = () => {
    const { register, watch, formState, handleSubmit } = useForm();

    const onSubmit = (data: string) => {
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
                <Button
                    style="w-full"
                    variant="btn-outline"
                    icon={<FcGoogle />}
                >
                    Google
                </Button>
            </div>
            <form>
                <Input
                    type="email"
                    placeholder="Enter your email adress"
                    text="Email"
                />

                <Input
                    text="Password"
                    placeholder="Enter your password"
                    type="password"
                />

                <Button style="w-full">Sign In</Button>

                <div>
                    <Link className="link" to="/passwordreset">
                        Forget password?
                    </Link>
                </div>

                <div>
                    <Link className="link" to="/signup">
                        Create and Account
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
