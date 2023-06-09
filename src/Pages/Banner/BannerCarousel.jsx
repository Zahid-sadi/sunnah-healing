import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../assets/Images/hijama1.jpg";
import img2 from "../assets/Images/hijama2.jpg";
import img3 from "../assets/Images/hijama3.jpg";
import img4 from "../assets/Images/therapy1.jpg";
import img5 from "../assets/Images/hijama4.jpg";
import img6 from "../assets/Images/hijama5.jpg";
import img7 from "../assets/Images/hijama7.jpg";
import img8 from "../assets/Images/therapy2.png";

import {Autoplay, Navigation, Pagination} from "swiper";
import { Link } from "react-router-dom";

const BannerCarousel = () => {
    const bannerItem = {
        msg: "heal from sunnah",
    };
    return (
        <div className=" rounded-2xl ">
            <Swiper
                // slidesPerView={2}
                // spaceBetween={15}
                // direction={"vertical"}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper h-scr"
            >
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img5} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img4} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img3} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img2} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img6} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img7} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen image-full " src={img8} alt="" /></SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50
        "
                            src={img2}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Sunnah is the best way to leading life </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img3}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Only Allah Can Solve Your Problem </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img4}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Sunnah is the best way to leading life </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img5}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Only Allah Can Solve Your Problem </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img6}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Sunnah is the best way to leading life </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img7}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Sunnah is the best way to leading life </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-screen w-screen m-0 ">
                        <img
                            className="h-screen w-screen image-full opacity-50 m-0
        "
                            src={img8}
                            alt=""
                        />

                        {/* <div className="hero "></div> */}
                        <div className=" text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2 ">
                            <div
                               
                            >
                             <h2 className="text-2xl font-extrabold text-orange-500 font-serif">Sunnah is the best way to leading life </h2>
                                <p className=" text-xl font-bold text-black text-center mx-auto  p-10 ">
                                    Jabir ibn ‘Abd-Allah (may Allah be pleased with him) said: I heard the Messenger of
                                    Allah (peace and blessings of Allah be upon him) say: “If there is anything good in
                                    the medicines with which you treat yourselves, it is in the incision of the cupper,
                                    or a drink of honey or cauterization with fire, but I do not like to be cauterized.”
                                    (Narrated by al-Bukhari, 6583; Muslim, 2205).
                                </p>
                        
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
             
              
                
            </Swiper>
          
        </div>
    );
};

export default BannerCarousel;
