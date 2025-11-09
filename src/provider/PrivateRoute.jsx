import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    //if-> user return children
    if (user && user?.email) {
        return children;
    }
    // else navigate login
    return <Navigate state={location.pathname} to='/login'></Navigate>   
};

export default PrivateRoute;