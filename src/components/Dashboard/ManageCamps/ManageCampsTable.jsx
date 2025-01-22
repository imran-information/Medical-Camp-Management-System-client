import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const ManageCampsTable = ({ allCamps: camps, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const [open, setOpen] = useState(false);
    const [campId, setCampId] = useState(null);

    const handleOpen = (campId) => {
        setCampId(campId)
        setOpen(true);
    }

    const OnClose = () => {
        setOpen(false);
    }
    const onConfirm = async () => {
        // Delete camp
        const { data } = await axiosSecure.delete(`/camps/${campId}`);
        if (data.deletedCount === 1) {
            Swal.fire({
                title: "Camp Deleted Successfully",
                icon: "success",
                draggable: true
            });
            setOpen(false);
            refetch();
        }
    }

    return (
        <TableContainer className='m-0 md:m-10' component={Paper} sx={{ mt: 3 }}>
            <Table data-aos="fade-left" data-aos-duration="2000">
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Name</strong></TableCell>
                        <TableCell><strong>Date & Time</strong></TableCell>
                        <TableCell><strong>Location</strong></TableCell>
                        <TableCell><strong>Healthcare Professional</strong></TableCell>
                        <TableCell><strong>Actions</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {camps.map((camp) => (
                        <TableRow data-aos="fade-left" data-aos-duration="2000" key={camp._id}>
                            <TableCell>{camp.name}</TableCell>
                            <TableCell>{camp.date}</TableCell>
                            <TableCell>{camp.location}</TableCell>
                            <TableCell>{camp.healthcareProfessional}</TableCell>
                            <TableCell>
                                <Link to={`/dashboard/update-camp/${camp._id}`} >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        sx={{ mr: 1 }}
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleOpen(camp._id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ConfirmDeleteDialog open={open} onClose={OnClose} onConfirm={onConfirm} />
        </TableContainer>
    );
};

export default ManageCampsTable;
