import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box, Grid } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import { uploadImage } from '../../../utility/utility';

const UpdateCampForm = () => {
    const { campId } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [formattedDate, setFormattedDate] = useState('');

    const { data: updateCampData, isLoading, refetch } = useQuery({
        queryKey: ['camp', campId],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/camps/${campId}`);
            return data;
        },
    });
    console.log(formattedDate);
    if (isLoading) return <LoadingSpinner />;
    const { name, image, fees, date, time, location, healthcareProfessional, participantCount, description } = updateCampData;

    const handleDateChange = (e) => {
        const isoDate = e.target.value;

        const [year, month, day] = isoDate.split('-');
        setFormattedDate(`${day}-${month}-${year}`);
    };

    const convertToISODate = (ddmmyyyy) => {
        const [day, month, year] = ddmmyyyy.split('-');
        return `${year}-${month}-${day}`; // Converts to YYYY-MM-DD
    };

    const onSubmit = async (formData) => {
        try {
            let imageUrl = formData.image;
            if (formData.imageFile && formData.imageFile[0]) {
                const file = formData.imageFile[0];
                imageUrl = await uploadImage(file);
            }

            const campData = {
                name: formData.campName,
                image: imageUrl,
                fees: parseFloat(formData.fees),
                date: formattedDate || date,
                time: formData.timeRange,
                location: formData.location,
                healthcareProfessional: formData.professionalName,
                participantCount: parseInt(formData.participantCount),
                description: formData.description,
            };

            console.log(campData);
            if (campId) {
                const { data } = await axiosSecure.put(`/camps/${campId}`, campData);
                if (data.modifiedCount === 1) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Camp updated successfully!',
                        timer: 1500,
                    });
                    navigate('/dashboard/manage-camps');
                }
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Submission Error',
                text: 'Something went wrong. Please try again.',
            });
        }
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: '100vh',
                padding: 2,
            }}
        >
            <Grid item xs={12} sm={8} md={6} lg={5}>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        padding: 4,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <Typography variant="h4" component="h1" align="center" mb={3}>
                        {campId ? 'Update Camp' : 'Create Camp'}
                    </Typography>

                    <Box mb={3}>
                        <TextField
                            label="Camp Name"
                            defaultValue={name}
                            fullWidth
                            {...register('campName', { required: 'Camp Name is required' })}
                            error={!!errors.campName}
                            helperText={errors.campName?.message}
                        />
                    </Box>
                    <Box mb={3}>
                        <Typography variant="body1" mb={1}>
                            Choose Image File:
                        </Typography>
                        {image && (
                            <Box mb={2}>
                                <img
                                    src={image}
                                    alt="Camp Preview"
                                    style={{ maxWidth: '20%', height: 'auto', borderRadius: '8px' }}
                                />
                            </Box>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            {...register('imageFile')}
                        />
                        {errors.imageFile && (
                            <Typography color="error" variant="body2">
                                {errors.imageFile.message}
                            </Typography>
                        )}
                    </Box>
                    <Box mb={3}>
                        <TextField
                            label="Camp Fees"
                            type="number"
                            defaultValue={fees}
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
                            defaultValue={convertToISODate(date)}
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
                            defaultValue={time}
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
                    <Box mb={3}>
                        <TextField
                            label="Location"
                            defaultValue={location}
                            fullWidth
                            {...register('location', { required: 'Location is required' })}
                            error={!!errors.location}
                            helperText={errors.location?.message}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            label="Healthcare Professional Name"
                            fullWidth
                            defaultValue={healthcareProfessional}
                            {...register('professionalName', { required: 'Healthcare Professional Name is required' })}
                            error={!!errors.professionalName}
                            helperText={errors.professionalName?.message}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            label="Participant Count"
                            type="number"
                            fullWidth
                            defaultValue={participantCount}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue={description}
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
                        fullWidth
                        sx={{ padding: 1.5, fontSize: 16 }}
                    >
                        Update Camp
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default UpdateCampForm;
