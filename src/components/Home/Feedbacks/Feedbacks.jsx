import axios from 'axios';
import React from 'react';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import FeedbackList from '../../CampDetails/FeedbackList';
import { useQuery } from '@tanstack/react-query';
import Heading from '../../Shared/Heading';

const Feedbacks = () => {
    const { data: feedbacks = [], isLoading } = useQuery({
        queryKey: ['allFeedbacks'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/feedbacks`);
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />
    // console.log(feedbacks);
    return (
        <div className='container mx-auto mt-20'>
            <Heading title={"Participant Feedbacks"} center={true} subtitle={"Hear from Participants About How Our Medical Camps Have Made a Positive Impact on Their Lives."} />
            <div className="px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        feedbacks.map(feedback => <FeedbackList key={feedback._id} feedback={feedback} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedbacks;