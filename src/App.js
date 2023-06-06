import  { Toaster } from 'react-hot-toast'; 
import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Pages/Routes/Router/Router";
import 'react-day-picker/dist/style.css';



function App() {
    return (
        <div className="mx-auto">
            <RouterProvider router={router}></RouterProvider>
           <Toaster></Toaster>
        </div>
    );
}

export default App;
