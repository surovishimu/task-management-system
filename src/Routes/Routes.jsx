import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Features from "../Pages/Features/Features";
import ForTeam from "../Pages/ForTeam/ForTeam";
import Pricing from "../Pages/Pricing/Pricing";
import Mytask from "../Pages/Mytask/Mytask";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'features',
                element: <Features></Features>
            },
            {
                path: 'forTeam',
                element: <ForTeam></ForTeam>
            },
            {
                path: 'pricing',
                element: <Pricing></Pricing>
            },
            {
                path: 'mytask',
                element: <Mytask></Mytask>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registration',
                element: <Registration></Registration>
            }
        ]
    },
]);
