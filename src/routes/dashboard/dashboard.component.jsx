import DashboardTopCard from '../../components/dashboard-card/dashboard-top-card.component';
import AccountCard from '../../components/account/account-card.component';
import Layout from '../../components/layout/layout.component';
import {
    MainColumn,
    SideColumn,
    MainContentContainer
} from '../../components/layout/layout.styles';
import RecentTransactions from '../../components/recent-transactions/recent-transactions.component';
import Upcoming from '../../components/upcoming/upcoming.component';

const Dashboard = () => {
    return (
        <Layout title={'Good evening, Thomas'}>
            <MainContentContainer>
                <MainColumn>
                    <DashboardTopCard />
                    <RecentTransactions />
                </MainColumn>
                <SideColumn>
                    <AccountCard />
                    <Upcoming />
                </SideColumn>
            </MainContentContainer>
        </Layout>
    );
};

export default Dashboard;
