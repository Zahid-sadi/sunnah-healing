import React from "react";
import Banner from "../../Banner/Banner";
import About from "../About/About";
import Faq from "../Faq/Faq";
import ServiceCategories from "../ServiceCategory/ServiceCategories";
import Reviews from "../Review/Reviews";


const Home = () => {
    return (
        <div className="mx-auto" >
            <Banner></Banner>,
            <ServiceCategories></ServiceCategories>,
            <About></About>,
            <Faq></Faq>,
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;
