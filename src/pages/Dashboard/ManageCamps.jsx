import React from "react";
import ManageCampsTable from "../../components/Dashboard/ManageCamps/ManageCampsTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import ConfirmDeleteDialog from "../../components/Dashboard/ManageCamps/ConfirmDeleteDialog";


const ManageCamps = () => {
    const axiosSecure = useAxiosSecure()
    const { isLoading, error, data: allCamps } = useQuery({
        queryKey: ['manage-camps', 'all-camps'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/all-camps')
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />
    console.log(allCamps);


    return <div>Manage Camps Page
        <ManageCampsTable allCamps={allCamps} />
        <ConfirmDeleteDialog />
    </div>;
};

export default ManageCamps;
