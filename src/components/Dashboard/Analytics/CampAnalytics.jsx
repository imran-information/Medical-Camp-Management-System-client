import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CampAnalytics = ({ camps = [] }) => {
    // Example data format
    const chartData = camps.map(camp => ({
        name: camp.name,
        fee: camp.fee,
        attendees: camp.attendees,
    }));

    return (
        <div style={{ width: "100%", height: 400 }}>
            <h2>Participant's Registered Camps</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="fee" fill="#8884d8" name="Camp Fee" />
                    <Bar dataKey="attendees" fill="#82ca9d" name="Attendees" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CampAnalytics;
