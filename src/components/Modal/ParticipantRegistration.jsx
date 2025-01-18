import { Button } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

// React Modal Styling
Modal.setAppElement("#root");

const ParticipantRegistration = ({ isModalOpen, closeModal, refetch, camp }) => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { name, fees, location, healthcareProfessional, _id } = camp || {}

    const [formData, setFormData] = useState({
        age: "",
        phoneNumber: "",
        gender: "",
        emergencyContact: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        // Save data to the database (mocked here with a console log)
        const participantData = {
            ...formData,
            participantName: user?.displayName,
            participantEmail: user?.email,
            campId: _id,

        };
        // console.log("Saved Participant Data:", participantData);
        try {
            const { data } = await axiosSecure.post('/camp-participant-registration', participantData)
            if (data.insertedId) {
                // Participant count increased by 1.
                const { data } = await axiosSecure.patch(`/camps/participant/${_id}`)
                if (data.matchedCount) {
                    refetch()
                    closeModal();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Camp Participant Registration Successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

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
        <div className="p-6">
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => closeModal()}
                className="bg-white p-8 rounded shadow-md max-w-lg mx-auto mt-20"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
            >
                <h2 className="text-xl font-semibold mb-4">Participant Registration</h2>

                {/* Camp Details (Read-only) */}
                <div className="mb-4">
                    <p><strong>Camp Name:</strong> {name}</p>
                    <p><strong>Camp Fees:</strong> {fees}</p>
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Healthcare Professional:</strong> {healthcareProfessional}</p>
                </div>

                {/* Logged-in User Info */}
                <div className="mb-4">
                    <p><strong>Participant Name:</strong> {user?.displayName}</p>
                    <p><strong>Participant Email:</strong> {user?.email}</p>
                </div>

                {/* Form Inputs */}
                <div className="space-y-4">
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="text"
                        name="emergencyContact"
                        placeholder="Emergency Contact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    <Button onClick={() => closeModal()} variant="outlined" color="" sx={{ mt: 3 }}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 3 }}>
                        Submit
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default ParticipantRegistration;
