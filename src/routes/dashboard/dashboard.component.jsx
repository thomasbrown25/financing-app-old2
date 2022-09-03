import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
import PlaidLink from '../../components/plaid-link/plaid-link.component';

const Dashboard = ({ user: { currentUser } }) => {
    if (!currentUser.PlaidAccessToken) {
        return <PlaidLink />;
    }

    return (
        <Layout title={`Good evening, ${currentUser?.firstname}`}>
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

Dashboard.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(Dashboard);
