import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './routes/PrivateRoute';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Dashboard from './routes/dashboard/dashboard.component';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='auth' element={<Authentication />} />
                <Route
                    path='dashboard'
                    element={<PrivateRoute component={<Dashboard />} />}
                />
            </Route>
        </Routes>
    );
};

export default App;
