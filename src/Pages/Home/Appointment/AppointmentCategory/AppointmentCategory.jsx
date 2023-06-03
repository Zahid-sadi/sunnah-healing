import React from "react";

const AppointmentCategory = ({appointmentCategory,setService}) => {
    const {name, img, slots} = appointmentCategory;
    return (
        <div className="card h-96 w-96 glass mx-auto">
            <figure>
                <img className="h-64 w-full" src={img} alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{slots.length >0 ? slots[0] : 'Already booked Lets try another day '}</p>
                <p>{slots.length} available</p>
                <div className="card-actions justify-end">
                    <label 
                    disabled={slots.length === 0}
                    htmlFor="appointment_modal"
                    className="btn"
                    onClick={()=>setService(appointmentCategory)}
                    >
                        Get Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCategory;
