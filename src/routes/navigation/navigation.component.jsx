import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

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
    const { currentUser } = useContext(UserContext);

    // adding active class name to element to change font color
    // will refactor later to do this through
    const handleActiveChange = (e) => {
        e.preventDefault();
        if (e.target.className.includes(' active')) {
            e.target.className = e.target.className.replace(' active', '');
        } else {
            e.target.className = e.target.className.concat(' active');
        }
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
                        <NavLink as='span' onClick={signOutUser}>
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

export default Navigation;
