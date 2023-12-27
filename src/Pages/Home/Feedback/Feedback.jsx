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
        dots: true,
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
        <div className=" h-fit lg:h-[700px] w-full lg:max-w-4xl ">
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div key={review.id} >
                        <div className=" h-full max-w-4xl flex flex-col lg:flex-row items-center p-5">
                        <div className="h-fit w-1/2  px-10">
                            <img className=" h-44 w-36 -mb-10 mx-auto rounded-2xl" src={review.picture} alt="" />
                            <BiSolidQuoteSingleRight className=" h-full w-full text-blue-600 p-0"></ BiSolidQuoteSingleRight>
                            
                        </div>
                        <div className="h-full w-1/2 sm:text-center p-10">
                            <h4 className="py-8 text-2xl font-bold text-black">{review.name}</h4>
                            <p className="text-center py-4">{review.description}</p>
                        </div>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Feedback;
