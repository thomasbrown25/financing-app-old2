import {
    Card,
    CardBody,
    CardBodyGrid,
    Row,
    CardHeader,
    Cell,
    Title,
    Amount,
    CardHeaderText,
    CardHeaderUpdatedContainer,
    CardHeaderUpdatedText,
    AmountSpan
} from './account-card.styles';

import { CardContainer } from '../card/card.styles';

const AccountCard = () => {
    return (
        <CardContainer>
            <Card>
                <CardHeader>
                    <CardHeaderText>Accounts</CardHeaderText>
                    <CardHeaderUpdatedContainer>
                        <CardHeaderUpdatedText>
                            Sync about 5 hours ago
                        </CardHeaderUpdatedText>
                    </CardHeaderUpdatedContainer>
                </CardHeader>
                <CardBody>
                    <CardBodyGrid>
                        <Row>
                            <Cell>
                                <Title>Checking</Title>
                                <Amount>
                                    <AmountSpan>$32,417</AmountSpan>
                                </Amount>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <Title>Savings</Title>
                                <Amount>
                                    <AmountSpan>Add +</AmountSpan>
                                </Amount>
                            </Cell>
                        </Row>
                        <Row>
                            <Cell>
                                <Title>Credit Cards</Title>
                                <Amount>
                                    <AmountSpan>Add +</AmountSpan>
                                </Amount>
                            </Cell>
                        </Row>
                    </CardBodyGrid>
                </CardBody>
            </Card>
        </CardContainer>
    );
};

export default AccountCard;
