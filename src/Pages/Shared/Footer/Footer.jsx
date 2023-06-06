import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
    
            <footer className="footer p-10gird bg-blue-400 text-base-content mt-5 p-5">
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
                    <p className="text-gray-900 font-semibold">
                        We care as prophet(pbuh) recommended 
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to ="/" className="link link-hover">About us</Link>
                    <Link to ="/" className="link link-hover">Contact</Link>
                    <Link to ="/" className="link link-hover">Jobs</Link>
                    <Link to ="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to = "/" className="link link-hover">Terms of use</Link>
                    <Link to = "/" className="link link-hover">Privacy policy</Link>
                    <Link to= "/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
       
    );
};

export default Footer;
