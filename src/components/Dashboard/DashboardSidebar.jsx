import React, { useState } from 'react';
import { FaHome, FaPlusCircle, FaCreditCard } from 'react-icons/fa';
import { FaIdCard } from "react-icons/fa6";
import { MdOutlineCreditScore } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IoCallSharp } from "react-icons/io5";
import profile from '../../assets/images/doctor.png';
import '../../components/Dashboard/DashboardSidebar.css';
import useOrganizer from '../../hooks/useOrganizer';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { IoMdAnalytics } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

const Dashboard = () => {
    const [isOrganizer, isLoading] = useOrganizer();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state

    if (isLoading) return <LoadingSpinner />;

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`fixed z-50 top-0 left-0 bg-lightBlue text-white p-5 h-screen transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 w-64 sm:w-72 md:w-80`}
            >
                <Link to="/" className="flex items-center bg-inherit">
                    <DashboardIcon />
                    <h4 className="text-2xl font-semibold ml-2">Medical Camp</h4>
                </Link>

                {/* Organizer Profile and Camp Management */}
                {isOrganizer ? (
                    <ul className="mt-16 uppercase">
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/organizer-profile"
                            >
                                <img className="w-5" src={profile} alt="" />
                                Organizer Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/add-camp"
                            >
                                <FaPlusCircle className="text-xl font-bold" />
                                Add Camp
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/manage-camps"
                            >
                                <FaCreditCard className="text-xl font-bold" />
                                Manage Camps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/manage-registered-camps"
                            >
                                <MdOutlineCreditScore className="text-xl font-bold" />
                                Manage Registered Camps
                            </NavLink>
                        </li>
                    </ul>
                ) : (
                    <ul className="mt-16 uppercase">
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/participant-profile"
                            >
                                <img className="w-5" src={profile} alt="" />
                                Participant Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/analytics"
                            >
                                <IoMdAnalytics className="text-xl font-bold" />
                                Analytics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/registered-camps"
                            >
                                <FaCreditCard className="text-xl font-bold" />
                                Registered Camps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="flex items-center gap-2 my-4 font-medium"
                                to="/dashboard/payment-history"
                            >
                                <MdOutlineCreditScore className="text-xl font-bold" />
                                Payment History
                            </NavLink>
                        </li>
                    </ul>
                )}

                {/* Common Links */}
                <div className="divider"></div>
                <ul className="uppercase">
                    <li>
                        <NavLink
                            className="flex items-center gap-2 my-4 font-medium"
                            to="/"
                        >
                            <FaHome className="text-xl font-bold" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="flex items-center gap-2 my-4 font-medium"
                            to="/available-camps"
                        >
                            <FaIdCard className="text-xl font-bold" />
                            Available Camps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="flex items-center gap-2 my-4 font-medium"
                            to="/contacts"
                        >
                            <IoCallSharp className="text-xl font-bold" />
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Toggle Button for Sidebar */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed top-5 left-5 bg-lightBlue text-white rounded-full p-2 z-50"
            >
                <HiMenuAlt3 size={24} />
            </button>

            {/* Main Content */}
            <div
                className={`container mx-auto py-10 transition-all duration-300 ${isSidebarOpen ? "ml-64 sm:ml-72 md:ml-80" : "ml-0"
                    }`}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
