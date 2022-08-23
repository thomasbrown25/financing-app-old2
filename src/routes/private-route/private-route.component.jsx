import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// import { selectCurrentUser } from '../../store/user/user.selector';

const PrivateRoutes = () => {
    const currentUser = null; // useSelector(selectCurrentUser);
    console.log(currentUser);

    return currentUser ? <Outlet /> : <Navigate to='sign-in' />;
};

export default PrivateRoutes;
