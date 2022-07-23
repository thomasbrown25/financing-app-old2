import Card from '../../components/card/card.component';
import DashboardTopCard from '../../components/dashboard-card/dashboard-top-card.component';
import AccountCard from '../../components/dashboard/account-card.component';
import { DashboardContainer } from './dashboard.styles';
import Layout from '../../components/layout/layout.component';
import { MainColumn, SideColumn } from '../../components/layout/layout.styles';

const Dashboard = () => {
    return (
        <Layout>
            <DashboardContainer>
                <MainColumn>
                    <DashboardTopCard />
                </MainColumn>
                <SideColumn>
                    <AccountCard />
                </SideColumn>
            </DashboardContainer>
        </Layout>
    );
};

export default Dashboard;
