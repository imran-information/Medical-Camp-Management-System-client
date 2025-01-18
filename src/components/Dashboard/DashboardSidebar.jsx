import React from 'react';
import { FaHome, FaPlusCircle, FaCreditCard } from 'react-icons/fa';
import { FaIdCard } from "react-icons/fa6";
import { MdOutlineCreditScore } from "react-icons/md";
import { Link, NavLink, Outlet } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IoCallSharp } from "react-icons/io5";
import profile from '../../assets/images/doctor.png'
import '../../components/Dashboard/DashboardSidebar.css'

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-80 bg-lightBlue text-white p-5 min-h-screen ">
                <Link to='/' className='flex items-center  bg-inherit'>
                    <DashboardIcon />
                    <h4 className='text-2xl font-semibold ml-2'>Medical Camp</h4>
                </Link>

                <ul className='mt-16 uppercase'>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/organizer-profile'> <img className='w-5' src={profile} alt="" />Organizer Profile</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/add-camp'><FaPlusCircle className='text-xl font-bold' />Add Camp</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/manage-camps'><FaCreditCard className='text-xl font-bold' /> Manage Camps</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/manage-registered-camps'><MdOutlineCreditScore className='text-xl font-bold' /> Manage Registered Camps</NavLink></li>
                </ul>

                {/* common user */}
                <div className="divider"></div>
                <ul className='uppercase'>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/'> <FaHome className='text-xl font-bold' />Home</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/available-camps'><FaIdCard className='text-xl font-bold' /> Available camps</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/contacts'> <IoCallSharp className='text-xl font-bold' />Contact us</NavLink></li>
                </ul>
            </div>
            <div className=" container mx-auto py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;