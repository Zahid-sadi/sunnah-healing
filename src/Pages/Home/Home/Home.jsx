import React from "react";
import Banner from "../../Banner/Banner";
import About from "../About/About";
import Faq from "../Faq/Faq";
import Review from "../Review/Review";
import ServiceCategories from "../ServiceCategory/ServiceCategories";


const Home = () => {
    return (
        <div className="mx-auto" >
            <Banner></Banner>,
            <ServiceCategories></ServiceCategories>,
            <About></About>,
            <Faq></Faq>
            <Review></Review>
        </div>
    );
};

export default Home;
