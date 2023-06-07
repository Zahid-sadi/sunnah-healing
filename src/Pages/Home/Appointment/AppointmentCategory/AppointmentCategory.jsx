import React from "react";

const AppointmentCategory = ({category,setService}) => {
    const {name, img, slots} = category;
    return (
        <div  className="card card-compact w-96  glass mx-auto">
            <figure>
                <img className="h-64 w-full" src={img} alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Already booked Lets try another day '}</p>
                <p>{slots.length} available</p>
                <div className="card-actions justify-end">
                    <label 
                    disabled={slots.length === 0}
                    htmlFor="appointment_modal"
                    className="btn"
                    onClick={()=>setService(category)}
                    >
                        Get Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCategory;
