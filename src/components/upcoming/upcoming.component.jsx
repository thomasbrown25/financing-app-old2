import {
    CardBody,
    CardHeader,
    CardHeaderText,
    Grid
} from '../card/card.styles';
import {
    CardBodyContentContainer,
    CardBodyHeader,
    CardBodyHeaderText,
    Cell,
    ItemAmount,
    ItemAmountText,
    ItemContainer,
    ItemLogo,
    ItemName,
    ItemNameContainer,
    ItemNameSubText,
    ItemNameText,
    Row,
    UpcomingCardContainer
} from './upcoming.styles';

const Upcoming = () => {
    return (
        <UpcomingCardContainer>
            <CardHeader>
                <CardHeaderText>Upcoming Bills</CardHeaderText>
            </CardHeader>
            <CardBody>
                <CardBodyHeader>
                    <CardBodyHeaderText>
                        You have 3 recurring charges due within the next 7 days
                        for $120.71.
                    </CardBodyHeaderText>
                </CardBodyHeader>
                <CardBodyContentContainer>
                    <Grid>
                        <ItemContainer to={'/dashboard'}>
                            <Row>
                                <Cell>
                                    <ItemNameContainer>
                                        <ItemLogo />
                                        <ItemName>
                                            <ItemNameText>Gas</ItemNameText>
                                            <ItemNameSubText>
                                                today
                                            </ItemNameSubText>
                                        </ItemName>
                                    </ItemNameContainer>
                                    <ItemAmount>
                                        <ItemAmountText>$55.00</ItemAmountText>
                                    </ItemAmount>
                                </Cell>
                            </Row>
                        </ItemContainer>
                        <ItemContainer to={'/dashboard'}>
                            <Row>
                                <Cell>
                                    <ItemNameContainer>
                                        <ItemLogo />
                                        <ItemName>
                                            <ItemNameText>
                                                Playstation Plus
                                            </ItemNameText>
                                            <ItemNameSubText>
                                                tomorrow
                                            </ItemNameSubText>
                                        </ItemName>
                                    </ItemNameContainer>
                                    <ItemAmount>
                                        <ItemAmountText>$55.00</ItemAmountText>
                                    </ItemAmount>
                                </Cell>
                            </Row>
                        </ItemContainer>
                    </Grid>
                </CardBodyContentContainer>
            </CardBody>
        </UpcomingCardContainer>
    );
};

export default Upcoming;
