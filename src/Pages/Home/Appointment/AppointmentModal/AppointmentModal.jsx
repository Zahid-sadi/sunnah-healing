import {format} from "date-fns";
import React from "react";

const AppointmentModal = ({service,setService, chooseDate}) => {
    const {name, slots} = service;
    console.log(slots);
    const date = format(chooseDate, "PPPP");


    const appointmentHandler = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const message = form.message.value;

        const appointmentSubmission = {
            appointmentDate : date,
            serviceName: name,
            customer :name,
            slot,
            email,
            phone,
            message,

        }
        setService(null)
        
        console.log(appointmentSubmission);
    }
    return (
        <div>
            <input type="checkbox" id="appointment_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="appointment_modal" className="btn btn-sm  btn-ghost btn-circle absolute right-2 top-2">
                        X
                    </label>
                    <h3 className="font-bold text-3xl text-center text-lime-500">{name}</h3>
                    <form onSubmit={appointmentHandler} className="grid grid-cols-1 p-2 mt-4 gap-5">
                        <input
                            type="text"
                            name="date"
                            readOnly
                            defaultValue={date}
                            className="input input-bordered bg-success font-bold text-center w-full"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="your name "
                            className=" input input-bordered input-success w-full"
                        />
                        <select name="slot" className="select select-accent w-full ">
                            {
                                slots.map((slot , index) =><option value={slot}
                                key={index}> {slot}
                                </option>)
                            }
                            
                        </select>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            className="input input-bordered input-success w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email "
                            className="input input-bordered input-success w-full"
                        />
                        <input
                            type="text-area"
                            name="message"
                            placeholder="Your Problems"
                            className="input input-bordered input-success w-full"
                        />
                        <input type="submit" value="submit" className="btn btn-success w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
