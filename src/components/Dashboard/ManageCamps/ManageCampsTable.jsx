import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const ManageCampsTable = ({ allCamps: camps, handleDelete }) => {
    const navigate = useNavigate();

    return (
        <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table>
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
                        <TableRow key={camp._id}>
                            <TableCell>{camp.name}</TableCell>
                            <TableCell>{camp.dateTime}</TableCell>
                            <TableCell>{camp.location}</TableCell>
                            <TableCell>{camp.healthcareProfessional}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => navigate(`/update-camp/${camp.id}`)}
                                    sx={{ mr: 1 }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="small"
                                    onClick={() => handleDelete(camp.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            
        </TableContainer>
    );
};

export default ManageCampsTable;
