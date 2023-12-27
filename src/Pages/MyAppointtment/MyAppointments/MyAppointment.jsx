import React from "react";

const MyAppointment = ({appoint}) => {
    const {customer, serviceName, slot, appointmentDate} = appoint;
    return (
        <tbody>
            
            <tr>
                
                <td>{customer}</td>
                <td>{serviceName}</td>
                <td>{slot}</td>
                <td>{appointmentDate}</td>
            </tr>
        </tbody>
    );
};

export default MyAppointment;
