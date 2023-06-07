import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {Autoplay, FreeMode, Pagination} from "swiper";

const Review = ({singleReview}) => {
    const { name, description, picture} = singleReview;
    console.log(singleReview);
    return (
        <div className="h-80 p-5 mx-auto ">
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
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide className="h-24 w-full bg-white">
                    <div className="">
                        <div className="flex flex-row">
                            <img className="rounded-full h-6 w-6" src={picture} alt="" />
                            <div>
                                <h4>{name}</h4>
                            </div>
                        </div>
                        <div>
                            <p>{}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Review;
