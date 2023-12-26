import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";

import img from "../../assets/Images/contact.1.jpg";
import { Link } from "react-router-dom";

const Contact = () => {

  const handleToContact = (e)=>{
 e.preventDefault()
 const form = e.target;
 const name = form.name.value;
const mail = form.mail.value;
const message= form.message.value
form.reset()
console.log(name,mail,message);
  }
    return (
        <div className="hero min-h-screen bg-sky-300">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="h-full w-full">
                    <img className="" src={img} alt="" />{" "}
                    
                    
                </div>
                <div className="card  w-full  shadow-2xl bg-blue-400 shadow-blue-500">
                    <form onSubmit={handleToContact} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="name" placeholder="name" className="input input-bordered bg-sky-300" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered bg-sky-300" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered bg-sky-300" placeholder="Bio"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-accent border-spacing-1 border-b-black" type="submit" value="submit" />
                        </div>
                        <div className=" flex flex-row gap-10 justify-around">
                        <Link className="h-24 w-24 hover:scale-110 duration-700 "><TbPhoneCall className="text-green-700 h-24 w-24 " />
                        </Link>
                        <Link className="h-24 w-24 hover:scale-110 duration-700 "><FaWhatsapp  className="text-green-800 h-24 w-24"/></Link>
                        
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
