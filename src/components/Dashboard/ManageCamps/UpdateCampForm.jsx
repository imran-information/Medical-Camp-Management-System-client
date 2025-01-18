import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box } from '@mui/material';
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

    const { data: updateCampData, isLoading, refetch } = useQuery({
        queryKey: ['camp', campId],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/camps/${campId}`);
            return data;
        },
    })

    if (isLoading) return <LoadingSpinner />
    const { name, image, fees, date, time, location, healthcareProfessional, participantCount, description } = updateCampData

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
                fees: formData.fees,
                date: formData.dateTime,
                time: formData.dateTime,
                location: formData.location,
                healthcareProfessional: formData.professionalName,
                participantCount: formData.participantCount,
                description: formData.description,
            };

            if (campId) {
                const { data } = await axiosSecure.put(`/camps/${campId}`, campData);
                if (data.modifiedCount === 1) {
                    refetch()
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
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                width: '50%',
                margin: 'auto',
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

                {/* Image Preview */}
                {image && (
                    <Box mb={2}>
                        <img

                            src={image}
                            alt="Camp Preview"
                            style={{ maxWidth: '20%', height: 'auto', borderRadius: '8px' }}
                        />
                    </Box>
                )}

                {/* File Input */}
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

            <Box mb={3}>
                <TextField
                    label="Date & Time"
                    type="datetime-local"
                    defaultValue={date}
                    fullWidth
                    {...register('dateTime', { required: 'Date & Time is required' })}
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.dateTime}
                    helperText={errors.dateTime?.message}
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
    );
};

export default UpdateCampForm;
