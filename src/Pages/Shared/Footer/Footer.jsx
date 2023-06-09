import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    
            <footer className="footer p-20 gird bg-blue-900 text-base-content mt-5 text-center h-fit ">
                <div>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current"
                    >
                        <img className="" c="" alt="" />
                    </svg>
                    <h3 className="text-white font-bold text-xl">Sunnah healing</h3>
                    <p className="text-green-400 font-semibold">
                        We care as prophet(pbuh) recommended 
                    </p>
                </div>
                <div className="text-black">
                    <span className="footer-title text-blue-100">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div className="text-black">
                    <span className="footer-title text-blue-100">Company</span>
                    <Link to ="/" className="link link-hover">About us</Link>
                    <Link to ="/" className="link link-hover">Contact</Link>
                    <Link to ="/" className="link link-hover">Jobs</Link>
                    <Link to ="/" className="link link-hover">Press kit</Link>
                </div>
                <div className="text-black">
                    <span className="footer-title text-blue-100">Legal</span>
                    <Link to = "/" className="link link-hover">Terms of use</Link>
                    <Link to = "/" className="link link-hover">Privacy policy</Link>
                    <Link to= "/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
       
    );
};

export default Footer;
