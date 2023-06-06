import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

const Review = () => {
    return (
        <div className="h-80 p-5 mx-auto">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // freeMode={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            // pagination={{
            //   clickable: false,
            // }}
            modules={[Autoplay,FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            {/* <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide>
            <SwiperSlide className="h-64 bg-white">Slide 2</SwiperSlide> */}
            
          </Swiper>
        </div>
      );
};

export default Review;