import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Button, Typography, Box
} from '@mui/material';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/Shared/LoadingSpinner';


const ManageRegisteredCamps = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, error, data: registeredCamps = [] } = useQuery({
        queryKey: ['registered-camps'],
        queryFn: async () => {
            try {
                const { data } = await axiosSecure.get('/registered-camps');
                return data;
            } catch (error) {
                console.error('Error fetching registered camps:', error);
            }
        }
    })

    if (isLoading) return <LoadingSpinner />
    console.log(registeredCamps);

    const handleConfirm = async (campId) => {
        try {
            const { data } = await axiosSecure.patch(`/registered-camps/${campId}`, { confirmationStatus: 'Confirmed' });
            if (data.modifiedCount) {
                Swal.fire('Success', 'Confirmation status updated!', 'success');
            }
        } catch (error) {
            Swal.fire('Error', 'Could not update confirmation status.', 'error');
        }
    };

    const handleCancel = async (campId) => {
        const camp = registeredCamps.find((c) => c._id === campId);
        if (camp.paymentStatus === 'Paid' && camp.confirmationStatus === 'Confirmed') return;

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This will cancel the registration!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axiosSecure.delete(`/registered-camps/${campId}`);
                if (data.deletedCount) {

                    Swal.fire('Cancelled!', 'The registration has been removed.', 'success');
                }
            } catch (error) {
                Swal.fire('Error', 'Could not cancel registration.', 'error');
            }
        }
    };

    return (
        <Box sx={{ width: '80%', margin: 'auto', mt: 4 }}>
            <Typography variant="h4" mb={3} align="center">
                Manage Registered Camps
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Camp Name</TableCell>
                            <TableCell>Camp Fees</TableCell>
                            <TableCell>Participant Name</TableCell>
                            <TableCell>Payment Status</TableCell>
                            <TableCell>Confirmation Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registeredCamps.map((camp) => (
                            <TableRow key={camp._id}>
                                <TableCell>{camp.campData.name}</TableCell>
                                <TableCell>{camp.campData.fees}</TableCell>
                                <TableCell>{camp.participantName}</TableCell>
                                <TableCell>
                                    <Typography
                                        color={camp.paymentStatus === 'Paid' ? 'green' : 'red'}>
                                        {camp.paymentStatus}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {camp.confirmationStatus === 'Pending' ? (
                                        <Button
                                            variant="outlined"
                                            color="warning"
                                            onClick={() => handleConfirm(camp._id)}
                                        >
                                            Pending
                                        </Button>
                                    ) : (
                                        <Typography color="green">Confirmed</Typography>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleCancel(camp._id)}
                                        disabled={
                                            camp.paymentStatus === 'Paid' &&
                                            camp.confirmationStatus === 'Confirmed'
                                        }
                                    >
                                        Cancel
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageRegisteredCamps;
