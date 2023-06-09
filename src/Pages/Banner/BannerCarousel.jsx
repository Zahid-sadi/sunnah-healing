import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from '../assets/Images/hijama1.jpg'
import img2 from '../assets/Images/hijama2.jpg'
import img3 from '../assets/Images/hijama3.jpg'
import img4 from '../assets/Images/therapy1.jpg'
import img5 from '../assets/Images/hijama4.jpg'
import img6 from '../assets/Images/hijama5.jpg'
import img7 from '../assets/Images/hijama7.jpg'
import img8 from '../assets/Images/therapy2.png'



import {Autoplay, Navigation, Pagination} from "swiper";

const BannerCarousel = () => {
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
           
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img5} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img4} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img3} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img2} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img6} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img7} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-screen mt-0  opacity-50 w-screen " src={img8} alt="" /></SwiperSlide>
               
               
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
