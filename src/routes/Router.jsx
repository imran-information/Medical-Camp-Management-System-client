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
import PrivetRoute from "./PrivetRoute";
import ParticipantProfile from "../pages/Dashboard/Participant/ParticipantProfile";
import Analytics from "../pages/Dashboard/Participant/Analytics";
import RegisteredCamps from "../pages/Dashboard/Participant/RegisteredCamps";
import PaymentHistory from "../pages/Dashboard/Participant/PaymentHistory";



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
        path: "dashboard",
        element: <PrivetRoute>
            <DashboardLayoutAccount />
        </PrivetRoute>,
        children: [
            // Organizer 

            {
                path: "organizer-profile",
                element: <ProtectDashboard>
                    <OrganizerProfile />
                </ProtectDashboard>

            },
            {
                path: "add-camp",
                element: <ProtectDashboard>
                    <AddCamp />
                </ProtectDashboard>
            },
            {
                path: "manage-camps",
                element: <ProtectDashboard>
                    <ManageCamps />
                </ProtectDashboard>
            },
            {
                path: "update-camp/:campId",
                element: <ProtectDashboard>
                    <CampUpdate />
                </ProtectDashboard>
            },
            {
                path: "manage-registered-camps",
                element: <ProtectDashboard>
                    <ManageRegisteredCamps />
                </ProtectDashboard>
            },

            // normal Participant

            {
                path: "participant-profile",
                element: <ParticipantProfile />
            },
            {
                path: "analytics",
                element: <Analytics />
            },
            {
                path: "registered-camps",
                element: <RegisteredCamps />
            },
            {
                path: "payment-history",
                element: <PaymentHistory />
            },
        ],

    }

]);

export default router