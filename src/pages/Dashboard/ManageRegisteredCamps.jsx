import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Button, Typography, Box
} from '@mui/material';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query'
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import Heading from '../../components/Shared/Heading';
import SearchBar from '../../components/Shared/SearchBar/SearchBar';


const ManageRegisteredCamps = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('')

    const { isLoading, error, data: registeredCamps = [], refetch } = useQuery({
        queryKey: ['registered-camps', search],
        queryFn: async () => {
            try {
                const { data } = await axiosSecure.get(`/registered-camps?search=${search}`);
                return data;
            } catch (error) {
                console.error('Error fetching registered camps:', error);
            }
        }
    })

    // console.log(registeredCamps);
    const onSearch = (search) => {
        setSearch(search);
    }

    // if (isLoading) return <LoadingSpinner />


    const handleConfirm = async (campId, participantEmail) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to confirm the register camp..?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.patch(`/registered-camp-status-organizer`, {
                        campId: campId,
                        confirmationStatus: 'Confirmed',
                        participantEmail: participantEmail
                    });

                    if (data.modifiedCount) {
                        refetch()
                        Swal.fire({
                            title: "Confirmed.",
                            text: "Your Register Camp Confirmed successfully.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire('Error', 'Could not confirmation.', 'error');
                }

            }
        });

    };

    const handleCancel = async (_id, id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This will cancel the registration!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, cancel it!',
        });

        if (result.isConfirmed) {
            try {
                const { data } = await axiosSecure.delete(`/registered-camp-delete-organizer/${_id}`)
                if (data?.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Cancelled!",
                        text: "The camp registration has been removed.",
                        icon: "success"
                    });
                    try {
                        const { data } = await axiosSecure.patch(`/camps/participant/${id}`, { status: "decrease" })
                        if (data?.modifiedCount) {
                            console.log("Updated");
                        }
                    } catch (error) {
                        Swal.fire('Error', 'Could not cancel registration.', 'error');
                    }
                }
            } catch (error) {
                Swal.fire('Error', 'Could not cancel registration.', 'error');
            }
        }
    };

    return (
        <Box sx={{ width: '100%', margin: 'auto', mt: 4 }}>
            <Typography variant="h4" mb={3} align="center">
                <Heading center={true} title={"Manage Registered Camps"} subtitle={"Only Paid all data Show in table"} />
            </Typography>

            {/* Search Bar */}
            <small className='ml-10'> Participant Name OR Confirmation Status:</small>
            <SearchBar onSearch={onSearch} />
            <TableContainer className='m-0 md:m-10' component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Camp Name</TableCell>
                            <TableCell>Camp Fees</TableCell>
                            <TableCell>Participant Name</TableCell>
                            <TableCell>Payment Status</TableCell>
                            <TableCell>Confirmation Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {registeredCamps.map((camp, index) => (
                            <TableRow key={camp._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{camp.campData.name}</TableCell>
                                <TableCell>{camp.campData.fees}</TableCell>
                                <TableCell>{camp.participantName}</TableCell>
                                <TableCell>
                                    <Typography
                                        color={camp.paymentStatus === 'Paid' && camp.confirmationStatus === "Confirmed" ? 'green' : 'primary'}>
                                        {camp.paymentStatus}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    {camp.confirmationStatus === 'Processing' ? (
                                        <Button
                                            variant="outlined"
                                            color="warning"
                                            onClick={() => handleConfirm(camp._id, camp.participantEmail)}
                                        >
                                            Confirm
                                        </Button>
                                    ) : (
                                        <Typography color="green">{camp.confirmationStatus}</Typography>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => handleCancel(camp._id, camp?.campId)}
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
