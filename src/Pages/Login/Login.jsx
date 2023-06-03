import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {

    const {loginUser}= useContext(AuthContext)

    const handleLogin =event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset()

        loginUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);

        })
        .then(error =>console.log(error)); 
    }

    
    return (
        <div className="hero min-h-screen bg-slate-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">please login so that you can explore</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 bg-slate-700">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered glass hover:bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered glass hover:bg-white" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-warning">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold text-lime-300 '>Do you want to <Link className=" text-orange-500 font-bold" to='/signUp'>SignUp</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
