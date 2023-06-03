import { createBrowserRouter } from "react-router-dom"
import Home from "../../Home/Home/Home"
import MainLayout from "../../../Layout/MainLayout/MainLayout"
import Login from "../../Login/Login";
import Appointment from "../../Home/Appointment/Appointment/Appointment";
import SignUp from "../../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
        ]
    }
])
export default router;