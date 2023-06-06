import {format} from "date-fns";
import React, {useEffect, useState} from "react";
import AppointmentCategory from "../AppointmentCategory/AppointmentCategory";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import { useQuery } from "@tanstack/react-query";

const AppointmentInfo = ({chooseDate}) => {
    // const [appointmentCategories, setAppointmentCategories] = useState([]);
    const date = format(chooseDate,'PPPP')

    const [service, setService] = useState(null)
    // console.log(service);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/appointmentCategory?.date=${date}`)
    //     .then((res) => res.json())
    //     .then((data) => setAppointmentCategories(data));
    // }, [date]);


    const { data: appointmentCategories = [] } = useQuery({
        queryKey: ['appointmentCategories', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentCategory?.date=${date}`);
            const data = await res.json();
            return data
        }
    });
    


    return (
        <div className="m-auto">
            <div >
                <h3 className="text-center text-2xl text-teal-400 font-bold p-5 m-5">
                    You Choose Appointment on  <span className="c text-2xl text-orange-500">{date}</span>
                </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto">
                {
                appointmentCategories.map(appointmentCategory => (
                    <AppointmentCategory key={appointmentCategory._id} appointmentCategory={appointmentCategory} 
                    setService={setService}
                    ></AppointmentCategory>
                ))}
            </div>

           {
           service &&  <AppointmentModal
           key={service._id} 
           service ={service}
           setService={setService}
           chooseDate={chooseDate}
            ></AppointmentModal>
            }
            
        </div>
    );
};

export default AppointmentInfo;
