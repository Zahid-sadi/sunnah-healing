import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Contexts/AuthProvider";
import {toast} from "react-hot-toast";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const logOutHandler = () => {
        logOut()
        .then(() => {
            toast("SignOut successfully");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const navItems = (
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/review">Reviews</Link>
            </li>
            <li>
                <Link to="/faq">FAQ</Link>
            </li>

            <li>
                <Link to="/appointment">Appointment</Link>
            </li>
            <li>
                <Link to="/myAppointmentDetail">Appointment Detail</Link>
            </li>
        </>
    );

    return (
        <div data-aos="fade-down" className="navbar glass h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-yellow-500"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to="" className="text-2xl font-bold ms-8 text-green-900">
                    Sunnah Healing
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
            </div>
            <div className="navbar-end ">
                <div className="me-5 ">
                    {user?.uid ? <p className="text-orange-400 font-bold mx-auto">{user.displayName} </p> : ""}
                </div>
                {user?.uid ? (
                    <Link onClick={logOutHandler} to="/login" className="btn border-indigo-400 rounded-s-full">
                        Log out
                    </Link>
                ) : (
                    <Link to="/login" className="btn border-indigo-400 rounded-s-full">
                        Log in
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
