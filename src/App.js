import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { setAuthToken } from './utils/api/api';

import store from './store/store';

import { loadUser } from './store/user/user.action';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import PrivateRoutes from './routes/private-route/private-route.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Recurring from './routes/recurring/recurring.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';

// import { PrivateRoute } from aaf './components/routes/PrivateRoute';

const App = () => {
    useEffect(() => {
        // check for token in LS when app first runs
        console.log(localStorage);
        if (localStorage.token) {
            console.log('we have a token in local storage');
            // if there is a token set axios headers for all requests
            setAuthToken(localStorage.token);
        }
        // try to fetch a user, if no token or invalid token we
        // will get a 401 response from our API
        store.dispatch(loadUser());

        // log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
            // if (!localStorage.token) store.dispatch({ type: LOGOUT });
        });
    }, []);

    return (
        <Routes>
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route element={<PrivateRoutes />}>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='recurring' element={<Recurring />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
