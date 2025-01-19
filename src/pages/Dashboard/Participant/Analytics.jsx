import React from 'react';
import Heading from '../../../components/Shared/Heading';
import CampAnalytics from '../../../components/Dashboard/Analytics/CampAnalytics';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/usePublic';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';


const Analytics = () => {
    const axiosPublic = useAxiosPublic();
    const { user, loading } = useAuth();
    const { data: registeredCamps = [], isLoading, refetch } = useQuery({
        queryKey: ['registeredCamps', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/registered-camps/${user?.email}`);
            return data;
        }
    });

    if (isLoading) return <LoadingSpinner />;
    console.log(registeredCamps);
    return (
        <div>
            <Heading title='Analytics' subtitle='View your analytics here' center={true} />
            <CampAnalytics camps={registeredCamps} />
        </div>
    );
};

export default Analytics;