import React from 'react';
import Heading from '../../../components/Shared/Heading';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import CampAnalytics from '../../../components/Dashboard/Participant/Analytics/CampAnalytics';
import useRegisteredCamps from '../../../hooks/useRegisteredCamps';
import { Helmet } from 'react-helmet-async';


const Analytics = () => {
    const [registeredCamps, isLoading] = useRegisteredCamps();

    // if (isLoading) return <LoadingSpinner />;
    // console.log(registeredCamps);
    return (
        <div data-aos="fade-left" data-aos-duration="2000">
            <Helmet>
                <title> Analytics | Medical Camp Management System</title>
            </Helmet>
            <Heading title='Analytics' subtitle='View your analytics here' center={true} />
            <CampAnalytics camps={registeredCamps} />
        </div>
    );
};

export default Analytics;