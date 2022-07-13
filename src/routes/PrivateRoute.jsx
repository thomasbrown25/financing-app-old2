import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from '../contexts/user.context';

const PrivateRoute = ({ component: Component }) => {
    const { currentUser } = useContext(UserContext);

    if (currentUser) return <Component />;

    return <Navigate to='/auth' />;
};

export default PrivateRoute;
