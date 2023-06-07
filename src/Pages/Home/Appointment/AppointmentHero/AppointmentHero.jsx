import { format } from "date-fns";
import {DayPicker} from "react-day-picker";


const AppointmentHero = ({chooseDate, setChooseDate}) => {

    const date = format(chooseDate, "PPPP");

    return (
        <div  className="hero h-[700px] w-full">
            <img
                className="h-[700px] w-full 
            "
                src="https://i0.wp.com/www.usa.edu/wp-content/uploads/2021/10/cupping-therapy-hero-1.jpeg?fit=1548%2C1000&ssl=1"
                alt=""
            />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" mx-auto hero-content text-center text-neutral-content grid md:grid-cols-1 lg:grid-cols-2  ">
                <div  data-aos="fade-down-right" className="text-center w-1/2 mx-auto p-auto">
                    <h3 className="mb-5 text-3xl font-bold">Select Your Date</h3>
                    <p className="">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    
                 <h4 className=" font-mono t- text-2xl text-orange-500 mt-5">{date}</h4>
                
                </div>
                <div  data-aos="fade-down-left"className="text-center w-1/2 mx-auto p-auto">
                    <p className="mb-5">Choose from here</p>
                    <DayPicker mode="single" selected={chooseDate} onSelect={setChooseDate}></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHero;
