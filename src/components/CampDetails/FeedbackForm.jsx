import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const FeedbackForm = ({ refetch, organizer }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { campId } = useParams();

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {

        reset({ rating: '', comments: '' });
    }, [organizer, user, reset]);

    const onSubmit = async (form) => {
        const feedbackInfo = {
            feedback: form.comments,
            rating: form.rating,
            participantName: user?.displayName,
            participantEmail: user?.email,
            participantImage: user?.photoURL,
            campId: campId,
            date: new Date().toLocaleDateString('en-CA'),
        };

        try {
            const { data } = await axiosSecure.post('/feedbacks', feedbackInfo);
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Feedback submitted successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
        reset({ rating: '', comments: '' });
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 mb-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Submit Your Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="rating" className="block text-gray-700 font-medium">
                        Rating (1-5):
                    </label>
                    <input
                        type="number"
                        id="rating"
                        min="1"
                        max="5"
                        {...register('rating', {
                            required: 'Rating is required',
                            min: { value: 1, message: 'Rating must be at least 1' },
                            max: { value: 5, message: 'Rating cannot exceed 5' },
                        })}
                        className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.rating ? 'border-red' : 'border-gray-300'
                            }`}
                    />
                    {errors.rating && (
                        <p className="text-red text-sm mt-1">{errors.rating.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="comments" className="block text-gray-700 font-medium">
                        Comments:
                    </label>
                    <textarea
                        id="comments"
                        rows="4"
                        {...register('comments', {
                            required: 'Comments are required',
                            minLength: {
                                value: 100,
                                message: 'Comments must be at least 100 characters.',
                            },
                        })}
                        className={`mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${errors.comments ? 'border-red' : 'border-gray-300'
                            }`}
                    />
                    {errors.comments && (
                        <p className="text-red text-sm mt-1">{errors.comments.message}</p>
                    )}
                </div>
                <Button
                    disabled={organizer || !user}
                    type="submit"
                    className="w-full"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                >
                    Submit Feedback
                </Button>
            </form>
        </div>
    );
};

export default FeedbackForm;
