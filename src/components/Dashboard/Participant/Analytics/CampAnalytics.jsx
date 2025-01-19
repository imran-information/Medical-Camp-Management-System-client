import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CampAnalytics = ({ camps = [] }) => {
    // Example data format
    const chartData = camps.map(camp => ({
        // name: 'imran',
        // fees: '1000',
        // "participant count": '100',
        name: camp?.campData?.name,
        fees: parseFloat(camp?.campData?.fees),
        "participant count": camp?.campData?.participantCount,
    }));

    return (
        <div style={{ width: "100%", height: 600 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fees" fill="#8884d8" name="Camp Fees" />
                    <Bar dataKey="participant count" fill="#82ca9d" name="Participant Count" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CampAnalytics;
