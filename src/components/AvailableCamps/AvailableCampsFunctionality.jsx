import React, { useState } from 'react';
import CampCard from '../Shared/Card/CampCard';
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../Shared/LoadingSpinner';
import useAxiosPublic from '../../hooks/usePublic';
import Pagination from '../Shared/Pagination/Pagination';

const AvailableCampsFunctionality = () => {
    const [searchCamp, setSearchCamp] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [layout, setLayout] = useState('three');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [campCount, setTotalCampCount] = useState(0)
    const axiosPublic = useAxiosPublic()


    const { isLoading, error, data: allCamps = [] } = useQuery({
        queryKey: ['allCamps', searchCamp, sortOption, page, rowsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-camps?search=${searchCamp}&sort=${sortOption}&page=${page}&size=${rowsPerPage}`)
            setTotalCampCount(res.data.campCount)
            return res.data.allCamp
        }
    })

    if (isLoading) return <LoadingSpinner />
    return (
        <div className="p-6">
            {/* Search and Sort Controls */}
            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search camps..."
                    value={searchCamp}
                    onChange={(e) => setSearchCamp(e.target.value)}
                    className="border rounded p-2 w-full md:w-1/2"
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border rounded p-2 w-full md:w-1/4"
                >
                    <option className='text-primary' value="">Sort by</option>
                    <option value="participantCount">Most Registered</option>
                    <option value="fees">Camp Fees</option>
                    <option value="alphabetical">Alphabetical Order</option>
                </select>
                <button
                    onClick={() => setLayout(layout === 'three' ? 'two' : 'three')}
                    className="border rounded p-2"
                >
                    Toggle Layout
                </button>
            </div>

            {/* Camp Cards */}
            <div className={`grid ${layout === 'three' ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '} gap-6 mx-auto`}  >
                {
                    allCamps.map(camp => <CampCard key={camp._id} camp={camp} />)
                }
            </div>
            <Pagination campCount={campCount} page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
        </div>
    );
};

export default AvailableCampsFunctionality;
