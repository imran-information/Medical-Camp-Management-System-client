import React from 'react';
import Heading from '../../components/Shared/Heading';
import AvailableCampsFunctionality from '../../components/AvailableCamps/AvailableCampsFunctionality';

const AvailableCamps = () => {
    

    return (
        <div className='container mx-auto px-6 py-10'>
            <Heading center={true} title={"Available Camps"} subtitle={"Explore Upcoming Medical Camps: Your Path to Better Health Starts Here."} />
            <AvailableCampsFunctionality  />

        </div>
    );
};

export default AvailableCamps;