import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [ signUpError, setSignUpError ] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        setSignUpError("");

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(name);

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("signUp successfully");
            const userInfo = {
                displayName: name,
            };
            navigate("/");

            updateUser(userInfo)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
        })
        .catch((err) => {
            console.error(err);

            setSignUpError(err.message);
        });
        console.log(handleSignUp);
    };

    return (
        <div className="hero min-h-screen bg-slate-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">please SignUp so that you can explore</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 bg-slate-700">
                    <form onSubmit={handleSignUp} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder=" Your Name"
                                className="input input-bordered glass hover:bg-white"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered glass hover:bg-white"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered glass hover:bg-white"
                            />
                            <label className="label">
                                <p href="#" className=" text-warning">
                                    {signUpError && <p>{signUpError}</p>}
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center font-semibold text-lime-300 ">
                        have you an account ?{" "}
                        <Link className=" text-orange-500 font-bold" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
