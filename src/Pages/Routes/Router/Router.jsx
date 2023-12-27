import { createBrowserRouter } from "react-router-dom"
import Home from "../../Home/Home/Home"
import MainLayout from "../../../Layout/MainLayout/MainLayout"
import Login from "../../Login/Login";
import Appointment from "../../Home/Appointment/Appointment/Appointment";
import SignUp from "../../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Faq from "../../Home/Faq/Faq";
import About from "../../Home/About/About";
import ServiceCategories from "../../Home/ServiceCategory/ServiceCategories";
import DashboardLayout from "../../../Layout/DashboardLayout/DashboardLayout";
import MyAppointmentDetail from "../../MyAppointtment/MyAppointmentDetail/MyAppointmentDetail";
import Contact from "../../Home/Contact/Contact";
import Feedback from "../../Home/Feedback/Feedback";




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
                path:'/review',
                element:<Feedback />,
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/serviceCategory',
                element:<ServiceCategories></ServiceCategories>
            },
            {
                path:'/appointment',
                element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
        ]
    },
    {

        path:'/myAppointmentDetail',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
              path:'/myAppointmentDetail',
              element:<MyAppointmentDetail></MyAppointmentDetail>
            }
        ]
    }
])
export default router;