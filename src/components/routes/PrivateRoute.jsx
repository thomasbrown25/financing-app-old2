import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

export const PrivateRoute = ({ component: Component, path }) => {
    const { currentUser } = useContext(UserContext);

    if (currentUser) return <Component />;

    return <Navigate to='/auth' />;
};
