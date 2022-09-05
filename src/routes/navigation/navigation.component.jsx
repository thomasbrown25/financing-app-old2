import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { selectCurrentUser } from '../../store/user/user.selector';

import { logout } from '../../store/user/user.action';

import {
    NavigationContainer,
    LogoContainer,
    NavLink,
    NavLinks,
    NavMenu,
    NavFooter,
    NavFooterItem,
    NavSpacer
} from './navigation.styles.jsx';

const Navigation = ({ logout }) => {
    const currentUser = useSelector(selectCurrentUser);

    if (currentUser) console.log('we got current user');

    const signOutUser = () => {
        logout();
    };

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavMenu>Hi, Thomas</NavMenu>
                <NavLinks>
                    <NavLink to='/dashboard'>Dashboard</NavLink>
                    <NavLink to='/recurring'>Recurring</NavLink>
                    <NavLink to='/spending'>Spending</NavLink>
                    <NavLink to='/accounts'>Accounts</NavLink>
                    <NavLink to='/transactions'>Transactions</NavLink>

                    {currentUser ? (
                        <NavLink onClick={signOutUser} as='span'>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>Sign In</NavLink>
                    )}
                </NavLinks>
                <NavSpacer />
                <NavFooter>
                    <NavFooterItem>Chat with us</NavFooterItem>
                </NavFooter>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

Navigation.propTypes = {
    logout: PropTypes.func.isRequired
};

export default connect(null, { logout })(Navigation);
