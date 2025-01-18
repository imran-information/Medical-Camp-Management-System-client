import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useQuery, } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import ParticipantRegistration from '../../components/Modal/ParticipantRegistration';
import Feedback from '../../components/CampDetails/Feedbacks';
import HealthResourceHub from '../../components/CampDetails/HealthResourceHub';

const CampDetails = () => {
    const { campId } = useParams();
    const axiosSecure = useAxiosSecure()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isLoading, error, data: camp = {}, refetch } = useQuery({
        queryKey: ['camp', campId],
        queryFn: async () => {
            const { data } = await axiosSecure(`/camps/${campId}`);
            return data;
        }
    })
    if (isLoading) return <LoadingSpinner />


    const closeModal = () => {
        setIsModalOpen(false)
    }



    return (
        <div className="container mx-auto px-6 py-12 min-h-screen">
            <Card sx={{ maxWidth: "full", margin: 'auto' }}>
                <div className="flex gap-4">
                    <CardMedia className='flex-1'
                        component="img"
                        height="400"
                        image={camp.image}
                        alt={camp.name}
                    />
                    <CardContent className='flex-1'>
                        <Typography variant="h4" gutterBottom>
                            {camp.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            <strong>Date:</strong> {camp.date} <br />
                            <strong>Time:</strong> {camp.time} <br />
                            <strong>Location:</strong> {camp.location}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" mt={2}>
                            <strong>Healthcare Professional:</strong> {camp.healthcareProfessional}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" mt={2}>
                            <strong>Fees:</strong> {camp.fees}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" mt={2}>
                            <strong>Participants:</strong> {camp.participantCount}
                        </Typography>
                        <Typography variant="body1" mt={3}>
                            <strong>Description:</strong> {camp.description}
                        </Typography>
                        <Button onClick={() => setIsModalOpen(true)} variant="contained" color="primary" sx={{ mt: 3 }}>
                            Join Camp
                        </Button>

                    </CardContent>
                </div>
            </Card>
            {/* Modal Camp Participant Registration */}
            <ParticipantRegistration closeModal={closeModal} isModalOpen={isModalOpen} refetch={refetch} camp={camp} />

            {/* camp feedbacks  */}
            <Feedback />

            {/* Health Resource Hub */}
            <HealthResourceHub />
        </div>
    );
};

export default CampDetails;
