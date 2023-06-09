import React from "react";
import BannerCarousel from "./BannerCarousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className="hero h-[700px] w-full">
            <img
                className="h-[700px] w-full 
        "
                src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2021/10/cupping-therapy-hero-1.jpeg?fit=1548%2C1000&ssl=1"
                alt=""
            />

            <div className="hero-overlay bg-opacity-70 "></div>
            <div className=" mx-auto hero-content text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="text-center mx-auto  p-8 text-blue-300 bg-gradient-to-r  from-indigo-100 ..."
                >
                    <h3 className="mb-5 text-3xl font-bold text-white">Heal from the Sunnah </h3>
                    <p className=" text-lg ">
                        Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of Allah (peace
                        and blessings of Allah be upon him) say: “If there is anything good in the medicines with which
                        you treat yourselves, it is in the incision of the cupper, or a drink of honey or cauterization
                        with fire, but I do not like to be cauterized.” (Narrated by al-Bukhari, 6583; Muslim, 2205).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
