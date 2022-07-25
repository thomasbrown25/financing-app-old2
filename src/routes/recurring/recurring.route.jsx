import { Routes, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard.component';

const RecurringRoute = () => {
    return (
        <Routes>
            <Route index element={<Recurring />} />
            <Route path=':item' element={<Dashboard />} />
        </Routes>
    );
};

export default RecurringRoute;
