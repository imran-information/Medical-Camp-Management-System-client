import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useQuery, } from '@tanstack/react-query'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import ParticipantRegistration from '../../components/Modal/ParticipantRegistration';
import Feedback from '../../components/CampDetails/Feedbacks';
import useOrganizer from '../../hooks/useOrganizer';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';


const CampDetails = () => {
    const { campId } = useParams();
    const axiosSecure = useAxiosSecure()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [organizer] = useOrganizer()
    const { user } = useAuth()

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
            <Helmet>
                <title>Camp Details | Medical Camp Management System</title>
            </Helmet>
            <Card sx={{ maxWidth: "full", margin: 'auto' }}>
                <div className="lg:flex gap-4">
                    <div data-aos="zoom-in" data-aos-duration="2000" className="flex-1 py-5 pl-5 rounded-md">
                        <CardMedia
                            component="img"
                            height="194"
                            image={camp.image}
                            alt={camp.name}
                            className="w-full h-auto rounded-md"
                        />
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="2000" className="flex-1">
                        <CardContent>
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
                            <Button
                                disabled={organizer || !user}
                                onClick={() => setIsModalOpen(true)}
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3 }}
                            >
                                Join Camp
                            </Button>
                        </CardContent>
                    </div>
                </div>

            </Card>
            {/* Modal Camp Participant Registration */}
            <ParticipantRegistration closeModal={closeModal} isModalOpen={isModalOpen} refetch={refetch} camp={camp} />

            {/* camp feedbacks  */}
            {/* <Feedback /> */}


        </div>
    );
};

export default CampDetails;
