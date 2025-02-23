import React from 'react';
import Heading from '../../components/Shared/Heading';
import AvailableCampsFunctionality from '../../components/AvailableCamps/AvailableCampsFunctionality';
import { Helmet } from 'react-helmet-async';

const AvailableCamps = () => {


    return (
        <div className="bg-gray-50 dark:bg-neutral-900">

            <div className='container mx-auto   py-24'>
                <Helmet>
                    <title>Available Camps | Medical Camp Management System</title>
                </Helmet>
                <Heading center={true} title={"Available Camps"} subtitle={"Explore Upcoming Medical Camps: Your Path to Better Health Starts Here."} />
                <AvailableCampsFunctionality />
            </div>
        </div>
    );
};

export default AvailableCamps;