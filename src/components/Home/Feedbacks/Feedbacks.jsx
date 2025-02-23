import axios from "axios";
import React from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import FeedbackList from "../../CampDetails/FeedbackList";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../Shared/Heading";

const Feedbacks = () => {
    const { data: feedbacks = [], isLoading, error } = useQuery({
        queryKey: ["allFeedbacks"],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/feedbacks`);
            return data;
        },
    });

    if (isLoading) return <LoadingSpinner />;
    if (error) return <p className="text-center text-red-500 text-lg">Failed to load feedbacks.</p>;

    return (
        <div className="bg-gray-50 py-20  dark:bg-neutral-900">
            <div className="container mx-auto   ">
                {/* Page Heading */}
                <Heading
                    title="Participant Feedbacks"
                    center
                    subtitle="Hear from Participants About How Our Medical Camps Have Made a Positive Impact on Their Lives."
                />

                {/* Feedback Grid */}
                <div className="grid grid-cols-1 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {feedbacks.map((feedback) => (
                        <FeedbackList key={feedback._id} feedback={feedback} />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Feedbacks;
