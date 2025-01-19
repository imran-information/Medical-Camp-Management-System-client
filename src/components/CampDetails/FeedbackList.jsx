import React, { useEffect, useState } from "react";

const FeedbackList = ({ feedback }) => {
    return (
        <div className="p-6 bg-gray-50 rounded-lg">
            {feedback.length === 0 ? (
                <p>No feedback available for this camp.</p>
            ) : (
                <div className="space-y-4">
                    <div
                        key={feedback.participantId}
                        className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
                    >
                        <img
                            src={feedback.participantImage}
                            alt={feedback.participantName}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-semibold">{feedback.participantName}</h3>
                            <p className="text-sm text-gray-500">{feedback.date}</p>
                            <p className="mt-2">{feedback.feedback.slice(0, 20)}...</p>
                            <div className="mt-2">
                                <span className="text-yellow-500">
                                    {"⭐".repeat(feedback.rating)}
                                </span>
                                {/* <span className="text-gray-300">
                                    {"⭐".repeat(5 - feedback.rating)}
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackList;
