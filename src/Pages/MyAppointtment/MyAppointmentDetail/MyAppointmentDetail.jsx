import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import MyAppointment from "../MyAppointments/MyAppointment";

const MyAppointmentDetail = () => {


    const {user } =useContext(AuthContext);

    

    const {data: appointments =[]}=useQuery({
        queryKey:['appointments', user?.email],
        queryFn : async()=>{
            const res =await fetch(`http://localhost:5000/appointments?email=${user.email}`)
            const data = await res.json();
            return data
        }
    })
    return (
        <div className="mx-auto">
            <h4 className="m-8 text-4xl font-semibold text-green-300 text-center">My appointment</h4>
            
                <table className="table mx-auto ">
                
                <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                   
                        
                      {
                        appointments.map((appoint)=> <MyAppointment
                        key ={appoint._id}
                        appoint={appoint}
                        ></MyAppointment>)
                        
                      }
                      
                       
                       
                   
                </table>
            
        </div>
    );
};

export default MyAppointmentDetail;
