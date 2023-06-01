import React, { useState } from 'react';
import AppointmentHero from '../AppointmentHero/AppointmentHero';
import AccessibleAppointment from '../AccessibleAppointment/AccessibleAppointment';

const Appointment = () => {
    const [chooseDate, setChooseDate] = useState(new Date());
    return (
        <AppointmentHero
        chooseDate={chooseDate}
        setChooseDate={setChooseDate}
        ></AppointmentHero>,

        <AccessibleAppointment
        chooseDate={chooseDate}
        setChooseDate={setChooseDate}
        ></AccessibleAppointment>
    );
};

export default Appointment;