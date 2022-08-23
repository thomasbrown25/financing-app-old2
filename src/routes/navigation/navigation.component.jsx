import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutStart } from '../../store/user/user.action';

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

const Navigation = () => {
    const dispatch = useDispatch();
    // const currentUser = useSelector(selectCurrentUser);

    // const signOutUser = () => dispatch(signOutStart());

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

                    {/* {currentUser ? (
                        <NavLink as='span'>Sign Out</NavLink>
                    ) : (
                        <NavLink to='/auth'>Sign In</NavLink>
                    )} */}
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

export default Navigation;
