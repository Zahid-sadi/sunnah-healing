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
import img5 from '../assets/Images/therapy2.png'



import {Autoplay, Navigation, Pagination} from "swiper";

const BannerCarousel = () => {
    return (
        <div className=" rounded-2xl">
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
           
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide ><img className="h-fit  w-full " src={img5} alt="" /></SwiperSlide>
                <SwiperSlide ><img className="h-fit  w-full " src={img3} alt="" /></SwiperSlide>
               
               
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
