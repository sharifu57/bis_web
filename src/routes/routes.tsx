import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/login";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <Login/>
    }
]);