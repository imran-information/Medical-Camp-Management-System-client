import React from 'react';
import Heading from '../../../components/Shared/Heading';
import CampAnalytics from '../../../components/Dashboard/Analytics/CampAnalytics';
import { useQuery } from '@tanstack/react-query';

const Analytics = () => {
    const { data: camps } = useQuery({
        queryKey: 'camps',
    });

    return (
        <div>
            <Heading title='Analytics' subtitle='View your analytics here' center={true} />
            <CampAnalytics />
        </div>
    );
};

export default Analytics;