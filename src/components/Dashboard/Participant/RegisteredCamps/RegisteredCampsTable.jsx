import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import PayRegisteredCamps from "../../../Modal/PayRegisteredCamps";

const RegisteredCampsTable = ({ registeredCamps = [], refetch }) => {
    const [isPaying, setIsPaying] = useState(false);
    const [payCamp, setPayCamp] = useState({});
    // // Sample data
    // const [camps, setCamps] = useState([
    //     {
    //         id: 1,
    //         name: "Camp A",
    //         fees: "$200",
    //         participant: "John Doe",
    //         paymentStatus: "Paid",
    //         confirmationStatus: "Confirmed",
    //     },
    //     {
    //         id: 2,
    //         name: "Camp B",
    //         fees: "$150",
    //         participant: "Jane Smith",
    //         paymentStatus: "Pay",
    //         confirmationStatus: "Pending",
    //     },
    //     {
    //         id: 3,
    //         name: "Camp C",
    //         fees: "$300",
    //         participant: "Alice Johnson",
    //         paymentStatus: "Paid",
    //         confirmationStatus: "Confirmed",
    //     },
    // ]);

    // const handlePay = (id) => {
    //     // alert(`Redirecting to payment for camp ID: ${id}`);
    //     // // Mock payment logic
    //     // setCamps((prevCamps) =>
    //     //     prevCamps.map((camp) =>
    //     //         camp.id === id ? { ...camp, paymentStatus: "Paid" } : camp
    //     //     )
    //     // );
    // };

    const handleCancel = (id) => {
        // alert(`Cancelling registration for camp ID: ${id}`);
        // setCamps((prevCamps) => prevCamps.filter((camp) => camp.id !== id));
    };

    const handleFeedback = (id) => {
        // alert(`Redirecting to feedback for camp ID: ${id}`);
        // Feedback logic can be implemented here
    };

    return (
        <div className="p-5">
            <table className="table-auto w-full text-left border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Camp Name</th>
                        <th className="border px-4 py-2">Camp Fees</th>
                        <th className="border px-4 py-2">Participant Name</th>
                        <th className="border px-4 py-2">Payment Status</th>
                        <th className="border px-4 py-2">Confirmation Status</th>
                        <th className="border px-4 py-2">Cancel</th>
                        <th className="border px-4 py-2">Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {registeredCamps.map((camp) => (
                        <tr key={camp._id}>
                            <td className="border px-4 py-2">{camp?.campData?.name}</td>
                            <td className="border px-4 py-2">{camp?.campData?.fees}</td>
                            <td className="border px-4 py-2">{camp?.participantName}</td>
                            <td className="border px-4 py-2">
                                {camp.paymentStatus === "Pay" ? (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => { setIsPaying(true), setPayCamp(camp) }}
                                    >
                                        Pay
                                    </Button>
                                ) : (
                                    <span className="text-green-500">Paid</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {camp.confirmationStatus === "Pending" ? (
                                    <span className="text-yellow-500">Pending</span>
                                ) : (
                                    <span className="text-green-500">Confirmed</span>
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    disabled={camp.paymentStatus === "Paid"}
                                    startIcon={<FaTrashAlt />}
                                    onClick={() => handleCancel(camp.id)}
                                >
                                    Cancel
                                </Button>
                            </td>
                            <td className="border px-4 py-2">
                                {camp.paymentStatus === "Paid" &&
                                    camp.confirmationStatus === "Confirmed" ? (
                                    <Button
                                        variant="contained"
                                        color="success"
                                        startIcon={<FaStar />}
                                        onClick={() => handleFeedback(camp.id)}
                                    >
                                        Feedback
                                    </Button>
                                ) : (
                                    <span className="text-gray-400">N/A</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PayRegisteredCamps isPaying={isPaying} setIsPaying={setIsPaying} camp={payCamp} />
        </div>
    );
};

export default RegisteredCampsTable;
