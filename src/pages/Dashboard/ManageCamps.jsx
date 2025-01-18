import React, { useState } from "react";
import ManageCampsTable from "../../components/Dashboard/ManageCamps/ManageCampsTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import TablePagination from "../../components/Dashboard/ManageCamps/TablePagination";
import Heading from "../../components/Shared/Heading";



const ManageCamps = () => {
    const axiosSecure = useAxiosSecure()

    const { isLoading, error, data: allCamps, refetch } = useQuery({
        queryKey: ['manage-camps', 'all-camps'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-camps')
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />


    return (
        <div>
            <Heading title='Manage Camps' subtitle='Manage all camps here' center={true} />
            <ManageCampsTable allCamps={allCamps} refetch={refetch} />
            {/* <TablePagination allCamps={allCamps} /> */}
        </div>
    )

};

export default ManageCamps;
