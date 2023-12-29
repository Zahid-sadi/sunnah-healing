import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiSolidQuoteSingleRight } from "react-icons/bi";


const Feedback = () => {
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 10000,
        pauseOnHover: true,
        // fade: true,
        cssEase: "linear",
    };

    return (
        <div className=" max-w-4xl mx-auto  ">
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} >
                        <div className="h- bg-gradient-to-r from-blue-300 to-blue-400   rounded-3xl  max-w-4xl flex flex-col lg:flex-row  items-center content-center place-content-center lace-items-center gap-0 mt-0 lg:mt-24 p-5">
                        <div className="h-fit w-full lg:w-1/2  px-10">
                            <img className="h-44  w-36 -mb-10 mx-auto rounded-2xl" src={review.picture} alt="" />
                            <BiSolidQuoteSingleRight className=" h-80 w-full text-orange-400 p-0"></ BiSolidQuoteSingleRight>
                            
                        </div>
                        <div className="h-full w-full lg:w-1/2 sm:text-center p-10">
                            <h4 className="p-8 text-center text-lg md:text-xl lg:text-2xl font-bold text-white shadow-md shadow-blue-700">{review.name}</h4>
                            <p className="text-md lg:text-md lg:text-xl text-justify italic py-4">{review.description}</p>
                        </div>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Feedback;
