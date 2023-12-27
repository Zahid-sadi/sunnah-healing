import Banner from "../../Banner/Banner";
import About from "../About/About";
import Faq from "../Faq/Faq";
import ServiceCategories from "../ServiceCategory/ServiceCategories";
import BannerCarousel from "../../Banner/BannerCarousel";
import Feedback from "../Feedback/Feedback";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        
        <div className="mx-auto bg-sky-300">
            <BannerCarousel></BannerCarousel>
            <Banner></Banner>,
            <ServiceCategories></ServiceCategories>,
            <About></About>,<Faq></Faq>,
            <Feedback></Feedback>,
            <Contact></Contact>
            
        </div>
        
    );
};

export default Home;
