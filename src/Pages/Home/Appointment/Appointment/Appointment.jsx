import React, { useState } from 'react';
import AppointmentHero from '../AppointmentHero/AppointmentHero';
import AppointmentInfo from '../AppointmentInfo/AppointmentInfo';
const Appointment = () => {
    const [chooseDate, setChooseDate] = useState(new Date());
    return (
       <>
         <AppointmentHero
        chooseDate={chooseDate}
        setChooseDate={setChooseDate}
        ></AppointmentHero>
        <AppointmentInfo
        chooseDate={chooseDate}
        ></AppointmentInfo>
     

      
       </>
    );
};

export default Appointment;