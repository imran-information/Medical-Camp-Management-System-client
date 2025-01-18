import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import CampDetails from "../pages/CampDetails/CampDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import DashboardLayoutAccount from "../layouts/DashboardLayoutAccount";
import ProtectDashboard from "./ProtectDashboard";
import OrganizerProfile from "../pages/Dashboard/OrganizerProfile";
import AddCamp from "../pages/Dashboard/AddCamp";
import ManageCamps from "../pages/Dashboard/ManageCamps";
import ManageRegisteredCamps from "../pages/Dashboard/ManageRegisteredCamps";
import CampUpdate from "../pages/Dashboard/CampUpdate";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'available-camps',
                element: <AvailableCamps />
            },
            {
                path: 'camp-details/:campId',
                element: <CampDetails />
            },


        ]

    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },

    // Dashboard layout 
    {
        path: "/dashboard",
        element: <ProtectDashboard>
            <DashboardLayoutAccount />
        </ProtectDashboard>,
        // element: <DashboardLayoutAccount />,
        children: [
            {
                path: "",
                element: <Navigate to="organizer-profile" />
            },
            {
                path: "organizer-profile",
                element: <OrganizerProfile />
            },
            {
                path: "add-camp",
                element: <AddCamp />
            },
            {
                path: "manage-camps",
                element: <ManageCamps />
            },
            {
                path: "update-camp/:campId",
                element: <CampUpdate />
            },
            {
                path: "manage-registered-camps",
                element: <ManageRegisteredCamps />
            },
        ],

    }

]);

export default router