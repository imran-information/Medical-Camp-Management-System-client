import { Button } from '@mui/material';
import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedbackForm = ({ refetch }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { campId } = useParams()
    const [form, setForm] = useState({ rating: '', comments: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const feedbackInfo = {
            feedback: form.comments,
            rating: form.rating,
            participantName: user?.displayName,
            participantEmail: user?.email,
            participantImage: user?.photoURL,
            campId: campId,
            date: new Date().toLocaleDateString("en-CA")
        }
        try {
            const { data } = await axiosSecure.post("/feedbacks", feedbackInfo);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Feedback submitted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch()
            }



        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
        setForm({ rating: '', comments: '' });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 mb-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Your Feedback</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="rating" className="block text-gray-700 font-medium">
                        Rating (1-5):
                    </label>
                    <input
                        type="number"
                        id="rating"
                        min="1"
                        max="5"
                        value={form.rating}
                        onChange={(e) => setForm({ ...form, rating: e.target.value })}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="comments" className="block text-gray-700 font-medium">
                        Comments:
                    </label>
                    <textarea
                        id="comments"
                        value={form.comments}
                        onChange={(e) => setForm({ ...form, comments: e.target.value })}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                    />
                </div>
                <Button type='submit' className='w-full' variant="contained" color="primary" sx={{ mt: 3 }}>
                    Submit Feedback
                </Button>
            </form>
        </div>
    );
};

export default FeedbackForm;
