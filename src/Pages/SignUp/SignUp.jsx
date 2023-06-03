import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-slate-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">please login so that you can explore</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 bg-slate-700">
                    <form  className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-blue-500">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="email" className="input input-bordered glass hover:bg-white" />
                        </div>
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
                                    error
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success" type="submit" value="login" />
                        </div>
                    </form>
                    <p className='text-center font-semibold text-lime-300 '>have you an account ?  <Link className=" text-orange-500 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default SignUp;