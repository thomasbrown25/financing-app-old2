import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Recurring from './routes/recurring/recurring.component';

// import { PrivateRoute } from './components/routes/PrivateRoute';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path='auth' element={<Authentication />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='recurring' element={<Recurring />} />
            </Route>
        </Routes>
    );
};

export default App;
