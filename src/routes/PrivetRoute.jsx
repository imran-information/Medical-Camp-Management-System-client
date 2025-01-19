import React from 'react';
import useAuth from '../hooks/useAuth';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <LoadingSpinner />;
    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;