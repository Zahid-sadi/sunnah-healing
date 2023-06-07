import React from 'react';
import BannerCarousel from './BannerCarousel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
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
        <div className="hero-overlay bg-opacity-50"></div>
        <div className=" mx-auto hero-content text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
        <div data-aos="fade-up" className="text-center w-1/2 mx-auto p-auto">
                <h3 className="mb-5 text-3xl font-bold">Heal from the Sunnah </h3>
                <p className="">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
        <div className="text-center w-1/2  p-0">
                
                {/* <BannerCarousel></BannerCarousel> */}
            </div>
          
          
        </div>
    </div>
    );
};

export default Banner;