import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";

const FeedbackList = ({ feedback, }) => {
    // console.log(feedback);
    return (
        <div className="p-6 bg-gray-50 rounded-lg">
            {feedback.length === 0 ? (
                <p className="text-2xl text-black">No feedback available for this camp.</p>
            ) : (
                <div className="space-y-4">
                    <div
                        key={feedback.participantId}
                        className="bg-white shadow-md rounded-lg p-4 gap-4"
                    >
                        <div className=" flex items-center gap-2 ">
                            <img
                                src={feedback.participantImage}
                                alt={feedback.participantName}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div className="">
                                <h3 className="font-semibold">{feedback.participantName}</h3>
                                <p className="text-sm text-gray-500">{feedback.date}</p>
                            </div>
                        </div>
                        <div>
                            <Tooltip title={feedback.feedback} arrow placement="top">
                                <p className="mt-2">
                                    {feedback.feedback.slice(0, 50)}...
                                </p>
                            </Tooltip>
                            <div className="mt-2">
                                <span className="text-yellow-500">
                                    {"⭐".repeat(feedback.rating)}
                                </span>
                                <span className="text-gray-300">
                                    {"⭐".repeat(5 - feedback.rating)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeedbackList;
