import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextField, Typography, Box } from '@mui/material';
import { uploadImage } from '../../../utility/utility';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CampForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {

        const file = data.imageFile[0];
        const image = await uploadImage(file);

        const campData = {
            name: data.campName,
            image: image,
            fees: data.fees,
            date: data.dateTime,
            time: data.dateTime,
            location: data.location,
            healthcareProfessional: data.professionalName,
            participantCount: data.participantCount,
            description: data.description,

        }

        try {
            const { data } = await axiosSecure.post('/camps', campData);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
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
                Camp Registration
            </Typography>

            <Box mb={3}>
                <TextField
                    label="Camp Name"
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

            <Box mb={3}>
                <TextField
                    label="Camp Fees"
                    type="number"
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
                    {...register('participantCount', { required: 'Participant Count is required' })}
                    error={!!errors.participantCount}
                    helperText={errors.participantCount?.message}
                />
            </Box>

            <Box mb={3}>
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
                fullWidth
                sx={{ padding: 1.5, fontSize: 16 }}
            >
                Submit
            </Button>
        </Box>
    );
};

export default CampForm;
