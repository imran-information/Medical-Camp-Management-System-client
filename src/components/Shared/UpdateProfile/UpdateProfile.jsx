import React, { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../LoadingSpinner';
import { uploadImage } from '../../../utility/utility';

const UpdateProfile = () => {
    const { user, loading, updateUserProfile } = useAuth()
    const [profile, setProfile] = useState({
        name: '',
        photo: '',
        email: user?.email,
    });


    const [isEditing, setIsEditing] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState(profile);
    const axiosSecure = useAxiosSecure();


    const { data: oldProfileInfo, isLoading, refetch } = useQuery({
        queryKey: ['oldProfileInfo', user],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users/${user?.email}`)
            setProfile(data);
            return data;
        }
    })

    if (isLoading, loading) return <LoadingSpinner />

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        setUpdatedProfile((prevState) => ({ ...prevState, photo: profile.photo }));
        if (file) {
            const photo = await uploadImage(file);

            setUpdatedProfile((prevState) => ({ ...prevState, photo: photo }));
            // const reader = new FileReader();
            // reader.onload = () => {
            //     setUpdatedProfile((prevState) => ({ ...prevState, image: reader.result }));
            // };
            // reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            const { data } = await axiosSecure.patch(`/users/${user?.email}`, updatedProfile)
            if (data.modifiedCount > 0) {
                setProfile(updatedProfile);
                setIsEditing(false);
                Swal.fire({
                    title: "Profile updated successfully!",
                    icon: "success",
                    draggable: true
                });
                await updateUserProfile(updatedProfile.name, updatedProfile.photo);
                refetch();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to update profile. Please try again.",
                });
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred. Please try again later.",
            });
        }

    };




    return (
        <div className="flex flex-col items-center p-4">
            {!isEditing ? (
                <div className="text-center ">
                    <Avatar
                        src={profile.photo || 'default-profile.png'}
                        alt="Organizer Profile"
                        sx={{ width: 120, height: 120 }}
                        className="mb-4 mx-auto border-2 border-primary"
                    />
                    <h2 className="text-2xl font-bold mb-2 dark:text-gray-300">{profile.name}</h2>
                    <p className="text-gray-600 mb-4 dark:text-gray-300">Contact: {profile.email}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<FaEdit />}
                        onClick={() => setIsEditing(true)}
                    >
                        Update Profile
                    </Button>
                </div>
            ) : (
                <Dialog open={isEditing} onClose={() => setIsEditing(false)} fullWidth maxWidth="sm">
                    <DialogTitle>Update Profile</DialogTitle>
                    <DialogContent >
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="flex flex-col gap-4">
                            <TextField
                                label="Name"
                                name="name"
                                defaultValue={profile.name}
                                onChange={handleInputChange}
                                fullWidth
                            />
                            <TextField
                                label="Contact"
                                name="contact"
                                value={profile.email}
                                InputProps={{
                                    readOnly: true,
                                }}
                                onChange={handleInputChange}
                                fullWidth
                            />
                            <label className="block text-sm font-medium text-gray-700">
                                Profile Image
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                            </label>
                            {updatedProfile.photo && (
                                <Avatar
                                    src={updatedProfile.photo}
                                    alt="Preview"
                                    sx={{ width: 120, height: 120 }}
                                    className="mt-4 mx-auto"
                                />
                            )}
                        </div>
                    </DialogContent>
                    <DialogActions data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <Button onClick={() => setIsEditing(false)} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} variant="contained" color="primary">
                            Save Changes
                        </Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
};

export default UpdateProfile;
