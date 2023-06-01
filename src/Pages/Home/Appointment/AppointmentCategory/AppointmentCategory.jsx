import React from "react";

const AppointmentCategory = ({appCategory,setService}) => {
    const {name , img ,slots} = appCategory;
    return (
        <div className="card h-96 w-96 glass mx-auto">
            <figure>
                <img className="h-64 w-full" src={img} alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{slots.length >0 ? slots[0] : 'already booked Lets try another day '}</p>
                <p>{slots.length} available</p>
                <div className="card-actions justify-end">
                    <label 
                    htmlFor="my_modal_6"
                    className="btn"
                    onClick={()=>setService(appCategory)}
                    >
                        Get Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCategory;
