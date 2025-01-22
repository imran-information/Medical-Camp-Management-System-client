import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../Shared/LoadingSpinner';
import Heading from '../Shared/Heading';
import FeedbackList from './FeedbackList';
import FeedbackForm from './FeedbackForm';
import useOrganizer from '../../hooks/useOrganizer';


const Feedbacks = () => {
    const { campId } = useParams()
    const axiosSecure = useAxiosSecure()
    const [organizer] = useOrganizer()


    const { isLoading, error, data: feedbacks = [], refetch } = useQuery({
        queryKey: ['feedbacks', campId],
        queryFn: async () => {
            const { data } = await axiosSecure(`/feedbacks/${campId}`)
            return data
        }
    })
    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            {/* FeedbackForm  */}
            <FeedbackForm refetch={refetch} organizer={organizer} />

            {/* all Participant Feedbacks */}
            <Heading title={"Participant Feedbacks"} center={true} subtitle={"Hear from Participants About How Our Medical Camps Have Made a Positive Impact on Their Lives."} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {
                    feedbacks.map(feedback => <FeedbackList key={feedback._id} feedback={feedback}  />)
                }
            </div>


        </div>
    );
};

export default Feedbacks;