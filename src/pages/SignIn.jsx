import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, watch, formState, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>email</label>
                            <input
                                type="text"
                                {...register("name")}
                                required
                                className="border border-yellow-300 border-solid"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                {...register("password")}
                                required
                                className="border border-red-300"
                            />
                        </div>
                        <div className=" inline-block p-2 rounded-sm bg-primary-light">
                            Google
                        </div>
                        <div className="inline-block p-2 rounded-md bg-secondary-light">
                            Github
                        </div>
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
