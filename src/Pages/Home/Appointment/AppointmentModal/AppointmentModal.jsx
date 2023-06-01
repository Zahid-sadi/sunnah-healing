import React from "react";

const AppointmentModal = ({service}) => {
    const {name, } = service;
    return (
        <div>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
                <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn"> close</label>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentModal;
