import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import PayRegisteredCamps from "../../../Modal/PayRegisteredCamps";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Feedback from "../../../Modal/Feedback";


const RegisteredCampsTable = ({ registeredCamps = [], refetch }) => {
    const [isPaying, setIsPaying] = useState(false);
    const [open, setOpen] = useState(false);
    const [payCamp, setPayCamp] = useState({});
    const [campId, setCampId] = useState(null)
    const axiosSecure = useAxiosSecure()


    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.delete(`/registered-camp-delete/${id}`)
                if (data?.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Registered Camp has been deleted.",
                        icon: "success"
                    });
                    const { data } = await axiosSecure.patch(`/camps/participant/${id}`, { status: "decrease" })
                    if (data?.modifiedCount) {
                        console.log("Updated");
                    }
                }

            }
        });


    };

    const handleFeedback = (id) => {
        setCampId(id)
        setOpen(true)
        console.log(id);
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
                                    (camp.confirmationStatus === 'Processing' ? <span className="text-primary">Paid</span> : <span className="text-green">Paid</span>)
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {camp.confirmationStatus === "Processing" ? (
                                    <span className="text-primary">Processing</span>
                                ) : (
                                    (camp.confirmationStatus === "Confirmed" ? '' : <span className="text-yellow">Pending</span>)
                                )}
                                {camp.confirmationStatus === "Confirmed" && <span className="text-green">Confirmed</span>}
                            </td>

                            <td className="border px-4 py-2">
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    disabled={camp.confirmationStatus === "Confirmed"}
                                    startIcon={<FaTrashAlt />}
                                    onClick={() => handleCancel(camp.campId)}
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
                                        onClick={() => handleFeedback(camp.campId)}
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
            <PayRegisteredCamps isPaying={isPaying} setIsPaying={setIsPaying} camp={payCamp} refetch={refetch} />
            <Feedback open={open} setOpen={setOpen} campId={campId} />
        </div>
    );
};

export default RegisteredCampsTable;
