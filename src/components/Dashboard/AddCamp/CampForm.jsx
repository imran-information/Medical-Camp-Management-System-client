import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box } from '@mui/material';
import { uploadImage } from '../../../utility/utility';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CampForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const [formattedDate, setFormattedDate] = useState('');
    const navigate = useNavigate()

    const handleDateChange = (e) => {
        const isoDate = e.target.value;
        const [year, month, day] = isoDate.split('-');
        setFormattedDate(`${day}-${month}-${year}`);
    };

    const onSubmit = async (data) => {
        const file = data.imageFile[0];
        const image = await uploadImage(file);

        const campData = {
            name: data.campName,
            image: image,
            fees: parseFloat(data.fees),
            date: formattedDate,
            time: data.timeRange,
            location: data.location,
            healthcareProfessional: "Dr. " + data.professionalName,
            participantCount: 0,
            description: data.description,
        };

        try {
            const { data: response } = await axiosSecure.post('/camps', campData);
            if (response.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Camp registered successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/dashboard/manage-camps')
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };

    return (
        <Box className='max-w-2xl'
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                width: '100%',
                margin: 'auto',
                padding: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Helmet>
                <title>Camp Registration | Medical Camp Management System</title>
            </Helmet>
            <Typography variant="h4" component="h1" align="center" mb={3}>
                Camp Registration
            </Typography>

            <Box mb={2}>
                <TextField
                    label="Camp Name"
                    fullWidth
                    {...register('campName', { required: 'Camp Name is required' })}
                    error={!!errors.campName}
                    helperText={errors.campName?.message}
                />
            </Box>

            <Box mb={2}>
                <Typography variant="body1" mb={1}>
                    Choose Image File:
                </Typography>
                <input
                    type="file"
                    accept="image/*"
                    {...register('imageFile', { required: 'Image file is required' })}
                />
                {errors.imageFile && (
                    <Typography color="error" variant="body2">
                        {errors.imageFile.message}
                    </Typography>
                )}
            </Box>

            <Box mb={2}>
                <TextField
                    label="Camp Fees"
                    type="number"
                    fullWidth
                    {...register('fees', { required: 'Camp Fees are required' })}
                    error={!!errors.fees}
                    helperText={errors.fees?.message}
                />
            </Box>

            <Box mb={2}>
                <TextField
                    label="Date (DD-MM-YYYY)"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    onChange={handleDateChange}
                    error={!!errors.date}
                    helperText={errors.date?.message || 'Please select a date'}
                />
                {formattedDate && (
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Selected Date: {formattedDate}
                    </Typography>
                )}
            </Box>

            <Box mb={2}>
                <TextField
                    label="Time Range (e.g., 8:00 AM - 3:00 PM)"
                    fullWidth
                    {...register('timeRange', {
                        required: 'Time Range is required',
                        pattern: {
                            value: /^[0-9]{1,2}:[0-9]{2}\s?(AM|PM)\s?-\s?[0-9]{1,2}:[0-9]{2}\s?(AM|PM)$/i,
                            message: 'Invalid time range format. Use e.g., 8:00 AM - 3:00 PM',
                        },
                    })}
                    error={!!errors.timeRange}
                    helperText={errors.timeRange?.message}
                />
            </Box>

            <Box mb={2}>
                <TextField
                    label="Location"
                    fullWidth
                    {...register('location', { required: 'Location is required' })}
                    error={!!errors.location}
                    helperText={errors.location?.message}
                />
            </Box>

            <Box mb={2}>
                <TextField
                    label="Healthcare Professional Name"
                    fullWidth
                    {...register('professionalName', { required: 'Healthcare Professional Name is required' })}
                    error={!!errors.professionalName}
                    helperText={errors.professionalName?.message}
                />
            </Box>

            <Box mb={2}>
                <TextField
                    label="Participant Count"
                    type="number"
                    fullWidth
                    value={0}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>

            <Box mb={2}>
                <TextField
                    label="Description"
                    multiline
                    rows={4}
                    fullWidth
                    {...register('description', { required: 'Description is required' })}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                />
            </Box>

            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ padding: 1.2, fontSize: 16 }}
                fullWidth
            >
                Submit
            </Button>
        </Box>
    );
};

export default CampForm;
