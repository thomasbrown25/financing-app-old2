import { Fragment } from 'react';
import {
    CardBody,
    CardHeader,
    CardHeaderSubText,
    CardHeaderText,
    Grid
} from '../card/card.styles';
import RecurringTransaction from './recurring-transaction.component.jsx.jsx';
import {
    InputSearch,
    RecurringSearch,
    RecurringSearchBar,
    RecurringSearchContainer,
    SearchLogoContainer,
    SearchLogo,
    SubscriptionContainer,
    Row,
    Column,
    ColumnName
} from './recurring-transactions.styles';

const RecurringTransactions = () => {
    return (
        <Fragment>
            <RecurringSearchContainer>
                <RecurringSearchBar>
                    <RecurringSearch>
                        <SearchLogoContainer>
                            <SearchLogo></SearchLogo>
                        </SearchLogoContainer>
                        <InputSearch placeholder='Search bills and subscriptions...' />
                    </RecurringSearch>
                </RecurringSearchBar>
            </RecurringSearchContainer>
            <SubscriptionContainer>
                <CardHeader>
                    <CardHeaderText>11 Subscriptions</CardHeaderText>
                    <CardHeaderSubText>
                        You spend $46/month on average
                    </CardHeaderSubText>
                </CardHeader>
                <CardBody>
                    <Grid>
                        <Row>
                            <Column>
                                <ColumnName>Name/Frequency</ColumnName>
                            </Column>
                            <Column>
                                <ColumnName>Account</ColumnName>
                            </Column>
                            <Column>
                                <ColumnName>Due</ColumnName>
                            </Column>
                            <Column>
                                <ColumnName>Amount</ColumnName>
                            </Column>
                        </Row>
                        <RecurringTransaction
                            to={'/dashboard'}
                            nameLogo={''}
                            nameText={'Amazon Prime'}
                            nameSubText={'Monthly'}
                            accountLogo={''}
                            accountText={'••2413'}
                            dueText={'in 18 days'}
                            amountDueText={'$16.08'}
                        />
                    </Grid>
                </CardBody>
            </SubscriptionContainer>
        </Fragment>
    );
};

export default RecurringTransactions;
