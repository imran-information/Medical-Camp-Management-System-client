import React, { useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Rating,
} from "@mui/material";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Feedback = ({ campId, open, setOpen, }) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const [formData, setFormData] = useState({
        rating: 0,
        comments: "",
    });

    const handleClose = () => setOpen(false);

    const handleRatingChange = (event, newValue) => {
        setFormData((prev) => ({ ...prev, rating: newValue }));
    };

    const handleCommentsChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, comments: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", formData);
        const feedbackInfo = {
            feedback: formData.comments,
            rating: formData.rating,
            participantName: user?.displayName,
            participantEmail: user?.email,
            participantImage: user?.photoURL,
            campId: campId,
            date: new Date().toLocaleDateString("en-CA")
        }
        try {
            const { data } = await axiosSecure.post("/feedbacks", feedbackInfo);
            // console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Feedback submitted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }
        handleClose();
    };

    return (
        <div className="flex justify-center items-center ">
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle className="text-center text-2xl font-bold text-gray-800">
                    Submit Your Feedback
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <div className="flex flex-col items-center">
                            <label className="block mb-2 text-lg font-medium text-gray-700">
                                Rate the Camp:
                            </label>
                            <Rating
                                name="rating"
                                value={formData.rating}
                                onChange={handleRatingChange}
                                size="large"
                            />
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="comments"
                                className="block text-gray-700 font-medium text-lg"
                            >
                                Comments:
                            </label>
                            <textarea
                                id="comments"
                                value={formData.comments}
                                onChange={handleCommentsChange}
                                required
                                className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                rows="4"
                                placeholder="Write your comments here..."
                            />
                        </div>
                    </DialogContent>
                    <DialogActions className="flex justify-center">
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

export default Feedback;
