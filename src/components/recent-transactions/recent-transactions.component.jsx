import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    CardContainer,
    CardHeader,
    CardHeaderText,
    CardBody,
    Grid
} from '../card/card.styles';
import RecentTransaction from './recent-transaction.component';
import { Cell, HeaderSubText, Item, Row } from './recent-transactions.styles';

import { getTransactions } from '../../store/transactions/transactions.action';
import { useEffect } from 'react';

const RecentTransactions = ({
    transactions: { transactions },
    getTransactions
}) => {
    useEffect(() => {
        getTransactions();
    }, [getTransactions]);

    // const TransactionComponent = () => {
    //     transactions?.forEach((transaction) => {
    //         return (
    //             <RecentTransaction
    //                 date={transaction.authorizedDate}
    //                 name={transaction.name}
    //                 status={transaction.pending ? '| pending' : '| complete'}
    //                 logo={''}
    //                 category={transaction.category}
    //                 amount={transaction.amount}
    //             />
    //         );
    //     });
    // };

    return (
        <CardContainer>
            <CardHeader>
                <CardHeaderText>Recent Transactions</CardHeaderText>
                <HeaderSubText>
                    You've had {transactions?.length} transactions this month
                </HeaderSubText>
            </CardHeader>
            <CardBody>
                <Grid>
                    <Row>
                        <Cell>
                            <Item>Date</Item>
                        </Cell>
                        <Cell>
                            <Item></Item>
                        </Cell>
                        <Cell>
                            <Item>Name</Item>
                        </Cell>
                        <Cell>
                            <Item>Category</Item>
                        </Cell>
                        <Cell>{/* <Item>Actions</Item> */}</Cell>
                        <Cell>
                            <Item>Amount</Item>
                        </Cell>
                    </Row>
                    {transactions?.map((transaction, i) => (
                        <RecentTransaction
                            key={i}
                            date={transaction.authorizedDate}
                            name={transaction.name}
                            status={
                                transaction.pending ? '| pending' : '| complete'
                            }
                            logo={''}
                            category={transaction.categories[0]}
                            amount={`${transaction.amount}`}
                        />
                    ))}
                </Grid>
            </CardBody>
        </CardContainer>
    );
};

RecentTransactions.propTypes = {
    transactions: PropTypes.object.isRequired,
    getTransactions: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    transactions: state.transactions
});

export default connect(mapStateToProps, { getTransactions })(
    RecentTransactions
);
