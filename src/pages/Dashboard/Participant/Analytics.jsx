import React from 'react';
import Heading from '../../../components/Shared/Heading';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import CampAnalytics from '../../../components/Dashboard/Participant/Analytics/CampAnalytics';
import useRegisteredCamps from '../../../hooks/useRegisteredCamps';


const Analytics = () => {
    const [registeredCamps, isLoading] = useRegisteredCamps();

    // if (isLoading) return <LoadingSpinner />;
    // console.log(registeredCamps);
    return (
        <div>
            <Heading title='Analytics' subtitle='View your analytics here' center={true} />
            <CampAnalytics camps={registeredCamps} />
        </div>
    );
};

export default Analytics;