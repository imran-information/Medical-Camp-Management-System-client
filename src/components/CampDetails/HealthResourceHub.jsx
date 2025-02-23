import React from 'react';
import Heading from '../Shared/Heading';
import HealthResourceCard from './HealthResourceCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../Shared/LoadingSpinner';

const HealthResourceHub = () => {
    const axiosSecure = useAxiosSecure()
    const { isLoading, error, data: resources } = useQuery({
        queryKey: ['resources'],
        queryFn: async () => {
            const { data } = await axiosSecure('/resources')
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />

    // console.log(resources);

    return (
        <div className="dark:bg-neutral-800">
            <div className='py-20 px-5 container mx-auto'>
                <Heading center={true} title={"Health Resource Hub"} subtitle={"Your Go-To Resource for Expert Health Tips, Vital Information, and Tools to Empower Your Wellness Journey."} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
                    {
                        resources.map((resource) => <HealthResourceCard key={resource._id} resource={resource} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default HealthResourceHub;