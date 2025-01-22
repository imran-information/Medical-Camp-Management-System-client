import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import LoadingSpinner from "../../../Shared/LoadingSpinner";


const PaymentsHistoryTable = ({ registeredCamps: paymentData = [], isLoading, refetch }) => {
    if (isLoading) return <LoadingSpinner />

    // const paymentData = [
    //     { campName: "Summer Camp 2025", fees: "$250", paymentStatus: "Paid", confirmationStatus: "Confirmed" },
    //     { campName: "Winter Camp 2024", fees: "$300", paymentStatus: "Pending", confirmationStatus: "Not Confirmed" },
    //     { campName: "Spring Camp 2025", fees: "$275", paymentStatus: "Paid", confirmationStatus: "Confirmed" },
    //     { campName: "Fall Camp 2024", fees: "$200", paymentStatus: "Paid", confirmationStatus: "Confirmed" },
    // ];

    return (
        <div className=" mx-auto p-4">
            <TableContainer component={Paper} className="shadow-lg">
                <Table>
                    <TableHead className="bg-gray-100">
                        <TableRow>
                            <TableCell className="font-bold">#</TableCell>
                            <TableCell className="font-bold">Camp Name</TableCell>
                            <TableCell className="font-bold">Fees</TableCell>
                            <TableCell className="font-bold">Payment Status</TableCell>
                            <TableCell className="font-bold">Confirmation Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paymentData.map((row, index) => (
                            <TableRow data-aos="fade-left" data-aos-duration="2000" key={row?._id} className="hover:bg-gray-50">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{row?.campData?.name}</TableCell>
                                <TableCell>{row?.campData?.fees}</TableCell>
                                <TableCell className={row.paymentStatus === "Paid" ? "text-primary" : "text-yellow"}>
                                    {row.paymentStatus}
                                </TableCell>
                                <TableCell className={row.confirmationStatus === "Confirmed" ? "text-green" : "text-red"}>
                                    {row.confirmationStatus}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PaymentsHistoryTable;
