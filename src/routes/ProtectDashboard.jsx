import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useOrganizer from "../hooks/useOrganizer";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const ProtectDashboard = ({ children }) => {
    const { user, loading } = useAuth();
    const [isOrganizer, isLoading] = useOrganizer();

    if (user && isOrganizer) return children;
    if (loading || isLoading) return <LoadingSpinner />;

    return <Navigate to="/login" />;
};

export default ProtectDashboard;
