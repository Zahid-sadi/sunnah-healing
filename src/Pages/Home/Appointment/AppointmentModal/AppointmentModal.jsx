import {format} from "date-fns";
import React, {useContext} from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";

const AppointmentModal = ({service, setService, chooseDate}) => {
    const {name:serviceName, slots} = service;
    // console.log(slots);
    const date = format(chooseDate, "PPPP");
    console.log(date);
    const {user} = useContext(AuthContext);

    const appointmentHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const message = form.message.value;

        const appointmentSubmission = {
            appointmentDate:date,
            serviceName: serviceName,
            customer: name,
            slot,
            email,
            phone,
            message,
        };
        fetch('http://localhost:5000/appointments',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(appointmentSubmission)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setService(null);
                toast.success('booked')

            }
            else{
                toast.error(data.message)
            }

        })

        console.log(appointmentSubmission);
    };
    return (
        <div>
            <input type="checkbox" id="appointment_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <label
                        htmlFor="appointment_modal"
                        className="btn btn-sm  btn-ghost btn-circle absolute right-2 top-2"
                    >
                        X
                    </label>
                    <h3 className="font-bold text-3xl text-center">{serviceName}</h3>
                    <form onSubmit={appointmentHandler} className="grid grid-cols-1 p-2 mt-4 gap-5">
                        <input
                            type="text"
                            name="date"
                            readOnly
                            defaultValue={date}
                            className="input input-bordered bg-info font-bold font-mono  text-center  w-full"
                        />
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            placeholder="your name "
                            className=" input input-bordered w-full"
                        />
                        <select name="slot" className="select select-accent font-mono font-bold w-full ">
                            {slots.map((slot, index) => (
                                <option value={slot} key={index}>
                                    {" "}
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            placeholder="Your email "
                            className="input input-bordered  w-full"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="text-area"
                            name="message"
                            placeholder="Your Problems"
                            className="input input-bordered w-full"
                        />
                        <input type="submit" value="submit" className="btn btn-success text-white text-lg font-bold w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;
