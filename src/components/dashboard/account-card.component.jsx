import {
    AccountCardContainer,
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
    CardHeaderUpdatedText
} from './account-card.styles';

const AccountCard = () => {
    return (
        <AccountCardContainer>
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
                                <Amount>$915</Amount>
                            </Cell>
                        </Row>
                    </CardBodyGrid>
                </CardBody>
            </Card>
        </AccountCardContainer>
    );
};

export default AccountCard;
