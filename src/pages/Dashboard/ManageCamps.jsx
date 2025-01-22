import React, { useState } from "react";
import ManageCampsTable from "../../components/Dashboard/ManageCamps/ManageCampsTable";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import Heading from "../../components/Shared/Heading";
import SearchBar from "../../components/Shared/SearchBar/SearchBar";
import Pagination from "../../components/Shared/Pagination/Pagination";

const ManageCamps = () => {
    const axiosSecure = useAxiosSecure()
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [campCount, setTotalCampCount] = useState(0)
    const onSearch = (search) => {
        setSearch(search);
    }
    const { isLoading, error, data: allCamps = [], refetch, } = useQuery({
        queryKey: ['manage-camps', 'all-camps', search, page, rowsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-camps-organizer?search=${search}&page=${page}&size=${rowsPerPage}`)
            setTotalCampCount(res.data.campCount)
            return res.data.allCamp
        }
    })
    // console.log(campCount);
    // if (isLoading) return <LoadingSpinner />


    return (
        <div className="">
            <Heading title='Manage Camps' subtitle='Manage all camps here' center={true} />
            {/* searchBar */}
            <SearchBar onSearch={onSearch} />
            <ManageCampsTable allCamps={allCamps} refetch={refetch} />

            <Pagination campCount={campCount} page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
        </div>
    )

};

export default ManageCamps;
