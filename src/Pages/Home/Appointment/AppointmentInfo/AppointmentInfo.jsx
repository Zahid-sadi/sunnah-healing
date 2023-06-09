import {format} from "date-fns";
import React, {useEffect, useState} from "react";
import AppointmentCategory from "../AppointmentCategory/AppointmentCategory";
import Loading from "../../../../Pages/Shared/Loading/Loading"
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import {useQuery} from "@tanstack/react-query";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AppointmentInfo = ({chooseDate}) => {
    const date = format(chooseDate, "PPPP");
    console.log(date);

    const [service, setService] = useState(null);
  

    const {data: appointmentCategories = [], refetch, isLoading } = useQuery({
        queryKey: ["appointmentCategories", date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentCategory?date=${date}`);
            const data = await res.json();
            return data;
        },
    });

    if(isLoading){
return <Loading></Loading>
    }

    return (
        <div 
        className="m-auto mb-16">
            <div>
                <h3 className="text-center text-2xl text-teal-400 font-bold p-5 m-5">
                    You Choose Appointment on <span className=" font-mono t- text-2xl text-orange-500">{date}</span>
                </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto">
                {appointmentCategories.map((category) => (
                    <AppointmentCategory
                        key={category._id}
                        category={category}
                        setService={setService}
                    ></AppointmentCategory>
                ))}
            </div>

            {service && (
                <AppointmentModal
                    service={service}
                    setService={setService}
                    chooseDate={chooseDate}
                    refetch={refetch}
                ></AppointmentModal>
            )}
        </div>
    );
};

export default AppointmentInfo;
