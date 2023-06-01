import {format} from "date-fns";
import React, {useEffect, useState} from "react";
import AppointmentCategory from "../AppointmentCategory/AppointmentCategory";
import AppointmentModal from "../AppointmentModal/AppointmentModal";

const AppointmentInfo = ({chooseDate}) => {
    const [appointmentCategories, setAppointmentCategories] = useState([]);

    const [service, setService] = useState({})

    useEffect(() => {
        fetch("appointmentCategory.json")
        .then((res) => res.json())
        .then((data) => setAppointmentCategories(data));
    }, []);
    return (
        <div className="mt-10">
            <div >
                <h3 className="text-center text-lg text-teal-500 font-bold p-5 m-5">
                    You Choose Appointment on  <span className="text-bold text-2xl text-orange-500">{format(chooseDate, "PPPP")}</span>
                </h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
                {appointmentCategories.map((appCategory) => (
                    <AppointmentCategory key={appCategory._id} appCategory={appCategory} 
                    setService={setService}
                    ></AppointmentCategory>
                ))}
            </div>

            <AppointmentModal 
            service={service}
            ></AppointmentModal>
        </div>
    );
};

export default AppointmentInfo;