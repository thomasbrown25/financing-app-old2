import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import PrivateRoutes from './routes/private-route/private-route.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Recurring from './routes/recurring/recurring.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';

// import { PrivateRoute } from './components/routes/PrivateRoute';

const App = () => {
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
