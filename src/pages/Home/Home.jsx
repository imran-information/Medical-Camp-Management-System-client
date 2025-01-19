import React from 'react';
import Banner from '../../components/Home/Banner';
import CampShowcase from '../../components/Home/CampShowcase';
import HealthResourceHub from '../../components/CampDetails/HealthResourceHub';
import Heading from '../../components/Shared/Heading';
import FeedbackList from '../../components/CampDetails/FeedbackList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';


const Home = () => {

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
        <div className='my-2'>
            <Banner />
            <div className="container mx-auto">
                <CampShowcase />


                {/*all camp feedbacks  */}
                <Heading title={"Participant Feedbacks"} center={true} subtitle={"Hear from Participants About How Our Medical Camps Have Made a Positive Impact on Their Lives."} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {
                        feedbacks.map(feedback => <FeedbackList key={feedback._id} feedback={feedback} />)
                    }
                </div>
               


                {/* Health Resource Hub */}
                <HealthResourceHub />
            </div>

        </div>
    );
};

export default Home;