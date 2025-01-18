
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/DashboardSidebar';
// import React from 'react';

const DashboardLayoutAccount = () => {
    return (
        <div className='font-[roboto]'>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardLayoutAccount;