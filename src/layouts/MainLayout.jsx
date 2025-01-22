import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='font-[roboto]'>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-454px)] py-20">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;