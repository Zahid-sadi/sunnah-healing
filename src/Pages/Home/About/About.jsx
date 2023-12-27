import React from "react";
import 'animate.css';
import img from '../../assets/Images/hijama. bg free.png'
const About = () => {
    return (
        <div className="hero mt-10 h-fit p-10 bg-sky-300">
            <div className="hero-content flex-col lg:flex-row-reverse  rounded-lg ">
                <div data-aos="fade-down-left" className="   bg-blue-400 rounded-lg shadow-2xl shadow-sky-500 w-full lg:w-1/2 p-8 text-start  font-serif">
                  <img className="overlay-50 h-fit" src={img} alt="" />
                  <h1 className="text-4xl font-extrabold p-5 text-center text-white">About Us</h1>
                    <p>Our team of highly trained professionals incorporates the latest complementary therapies into their
                    practice to bring about effective healing and a renewed sense of vitality. Whether you are seeking
                    treatment for acute or chronic health conditions, or just want to maintain your health at its peak,
                    our team can provide a thorough assessment and evaluation to a personalized treatment plan for you.
                    At Hijama Singapore, we take a holistic approach to well-being by providing a comprehensive range of
                    .</p>
                </div>
                <div  data-aos="fade-down-right" className="w-full  lg:w-1/2 shadow-2xl shadow-sky-400 p-10 rounded-lg bg-gradient-to-r from-sky-400 to-blue-400 ... font-serif text-black ">
                    
                    <h2 className="text-4xl font-extrabold p-5 text-center text-white">How we care </h2>
                    <h4 className="text-xl font-bold text-blue-800">Certified practitioner</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
                    <h4 className="text-xl font-bold text-blue-800 ">Modern technology</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
                    <h4  className="text-xl font-bold text-blue-800 ">House Call Service</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, consequuntur.</p>
                    <h4  className="text-xl font-bold text-blue-800">Membership / Year</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, qui?</p>

                </div>
            </div>
        </div>
    );
};

export default About;
