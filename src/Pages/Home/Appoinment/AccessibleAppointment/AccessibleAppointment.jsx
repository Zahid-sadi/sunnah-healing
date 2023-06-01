import { format } from 'date-fns';
import React from 'react';

const AccessibleAppointment = ({chooseDate}) => {
    return (
        <div>
            <h3 className='text-center font-semibold text-sky-400'>accessible appointments on {format(chooseDate,'PPPP')}</h3>
        </div>
    );
};

export default AccessibleAppointment;