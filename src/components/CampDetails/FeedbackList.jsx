import React from "react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const FeedbackList = ({ feedback }) => {
    return (
        <motion.div
            className="bg-white dark:bg-neutral-800 shadow-md rounded-lg p-5 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Participant Info */}
            <div className="flex items-center gap-4">
                <img
                    src={feedback.participantImage}
                    alt={feedback.participantName}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 dark:border-primary"
                />
                <div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-300">{feedback.participantName}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.date}</p>
                </div>
            </div>

            {/* Feedback Content */}
            <Tooltip title={feedback.feedback} arrow placement="top">
                <p className="text-gray-700 cursor-pointer dark:text-gray-400 ">
                    {feedback.feedback.length > 80 ? `${feedback.feedback.slice(0, 80)}...` : feedback.feedback}
                </p>
            </Tooltip>

            {/* Star Ratings */}
            <div className=" flex items-center">
                <span className="text-yellow-500 text-lg">{"⭐".repeat(feedback.rating)}</span>
                <span className="text-gray-300 text-lg">{"⭐".repeat(5 - feedback.rating)}</span>
            </div>
        </motion.div>
    );
};

export default FeedbackList;
