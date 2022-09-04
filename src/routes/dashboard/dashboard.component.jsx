import { useEffect } from 'react';
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

import { getLinkToken } from '../../store/user/user.action';

import PlaidLink from '../../components/plaid-link/plaid-link.component';

const Dashboard = ({ user: { currentUser }, getLinkToken }) => {
    useEffect(() => {
        if (!currentUser.accessToken) {
            getLinkToken();
        }
    }, []);

    return (
        <Layout title={`Good evening, ${currentUser?.firstname}`}>
            {currentUser.accessToken ? (
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
            ) : (
                <PlaidLink linkToken={currentUser.linkToken} />
            )}
        </Layout>
    );
};

Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
    getLinkToken: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getLinkToken })(Dashboard);
