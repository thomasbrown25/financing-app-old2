import {
    CardContainer,
    CardHeader,
    CardHeaderText,
    CardBody,
    Grid
} from '../card/card.styles';
import RecentTransaction from './recent-transaction.component';
import { Cell, HeaderSubText, Item, Row } from './recent-transactions.styles';

const RecentTransactions = () => {
    return (
        <CardContainer>
            <CardHeader>
                <CardHeaderText>Recent Transactions</CardHeaderText>
                <HeaderSubText>
                    You've had 73 transactions this month
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
                        <Cell>
                            <Item>Actions</Item>
                        </Cell>
                        <Cell>
                            <Item>Amount</Item>
                        </Cell>
                    </Row>
                    <RecentTransaction
                        date={'7/23'}
                        name={'Blizzard Entertainment'}
                        status={'| pending'}
                        logo={''}
                        category={'Entertainment & Rec.'}
                        amount={'$9.99'}
                    />
                </Grid>
            </CardBody>
        </CardContainer>
    );
};

export default RecentTransactions;
