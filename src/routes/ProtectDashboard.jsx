import React from "react";
import { Navigate } from "react-router-dom";

const ProtectDashboard = ({ children, isOrganizer = true }) => {
    return isOrganizer ? children : <Navigate to="/login" />;
};

export default ProtectDashboard;
