import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

const PrivateRoutes = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

    return currentUser ? <Outlet /> : <Navigate to='sign-in' />;
    return <Outlet />;
};

export default PrivateRoutes;
