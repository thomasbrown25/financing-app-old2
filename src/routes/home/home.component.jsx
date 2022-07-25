import { Outlet } from 'react-router-dom';
import Layout from '../../components/layout/layout.component';
import Dashboard from '../dashboard/dashboard.component';

const Home = () => {
    return (
        <Layout>
            <Outlet />
            <Dashboard />
        </Layout>
    );
};

export default Home;
