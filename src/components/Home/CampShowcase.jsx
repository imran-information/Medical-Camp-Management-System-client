import React from "react";
import { useNavigate } from "react-router-dom";
import CampCard from "../Shared/Card/CampCard";
import Heading from "../Shared/Heading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Button } from "@mui/material";

const CampShowcase = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure()
    const { data: popularCamps = [], refetch, isLoading } = useQuery({
        queryKey: ['popularCamps'],
        queryFn: async () => {
            const { data } = await axiosSecure('/camps')
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />

    return (
        <div className=" px-6 py-20">
            <Heading title={"Popular Medical Camps"} subtitle={"Top Medical Camps with Maximum Participation Top Medical Camps with Maximum Participation"} center={true} />
            {/* Camp Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
                {
                    popularCamps.map((camp, ind) => <CampCard key={ind} camp={camp} />)
                }
            </div>



            {/* See All Camps Button */}
            <div className="text-center mt-6">
                <Button onClick={() => navigate("/available-camps")} variant="contained">See All Camps</Button>
            </div>
        </div>
    );
};

export default CampShowcase;
