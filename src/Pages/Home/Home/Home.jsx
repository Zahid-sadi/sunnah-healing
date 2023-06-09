import React, { useContext } from "react";
import Banner from "../../Banner/Banner";
import About from "../About/About";
import Faq from "../Faq/Faq";
import ServiceCategories from "../ServiceCategory/ServiceCategories";
import BannerCarousel from "../../Banner/BannerCarousel";
import FeedbackCarousel from "../Feedback/FeedbackCarousel";

const Home = () => {
    return (
        
        <div className="mx-auto">
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>,
            <ServiceCategories></ServiceCategories>,
            <About></About>,<Faq></Faq>,
            <FeedbackCarousel></FeedbackCarousel>
            
        </div>
        
    );
};

export default Home;
