import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Pages/Routes/Router/Router";

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
