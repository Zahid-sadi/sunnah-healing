import {format} from "date-fns";
import React from "react";

const AppointmentModal = ({service, chooseDate}) => {
    const {name, slots} = service;
    console.log(slots);
    const date = format(chooseDate, "PPPP");
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my_modal_6" className="btn btn-sm  btn-ghost btn-circle absolute right-2 top-2">
                        X
                    </label>
                    <h3 className="font-bold text-3xl text-center text-orange-500 ">{name}</h3>
                    <form className="grid grid-cols-1 p-2 mt-4 gap-5">
                        <input
                            type="text"
                            name="date"
                            readOnly
                            value={date}
                            className="input input-bordered input-success w-full"
                        />
                        <input
                            type="text"
                            name="serviceName"
                            placeholder="service name "
                            className=" input input-bordered input-success w-full"
                        />
                        <select className="select select-accent w-full">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                            
                        </select>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered input-success w-full"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email "
                            className="input input-bordered input-successw-full"
                        />
                        <input
                            type="text-area"
                            name=""
                            placeholder="message"
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
