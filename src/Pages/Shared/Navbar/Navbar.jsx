import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    const navItems = (
        <>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/category">category</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
            <li>
                <Link to="/review">review</Link>
            </li>
            <li>
                <Link to="/appointment">appointment</Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-green-200  mx-auto glass s">
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
                <Link to="" className="text-xl font-bold text-blue-900">
                    Sunnah Healing
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
            </div>
            <div className="navbar-end ">
                <Link to="/login" className="btn border-indigo-400 rounded-s-full">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
