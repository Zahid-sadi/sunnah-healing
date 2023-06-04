import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Pages/Routes/Router/Router";
import 'react-day-picker/dist/style.css';
import { ToastContainer } from "react-toastify";


function App() {
    return (
        <div className="mx-auto">
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default App;
