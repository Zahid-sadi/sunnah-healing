import { createBrowserRouter } from "react-router-dom"
import Home from "../../Home/Home"
import MainLayout from "../../../Layout/MainLayout/MainLayout"
import Login from "../../Login/Login";

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
        ]
    }
])
export default router;