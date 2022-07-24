import AccountCard from '../../components/account/account-card.component';
import Layout from '../../components/layout/layout.component';
import {
    MainColumn,
    MainContentContainer,
    SideColumn
} from '../../components/layout/layout.styles';
import RecurringTransactions from '../../components/recurring-transactions/recurring-transactions.component';

const Recurring = () => {
    return (
        <Layout title={'Recurring'}>
            <MainContentContainer>
                <MainColumn>
                    <RecurringTransactions />
                </MainColumn>
                <SideColumn>
                    <AccountCard />
                </SideColumn>
            </MainContentContainer>
        </Layout>
    );
};

export default Recurring;
