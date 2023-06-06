import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <p className='text-center m-25'> loading............</p>
    }

    if(user){
        return children;
    }
    return <Navigate to ='/login'state={{from:location}} replace ></Navigate>;
};

export default PrivateRoute;