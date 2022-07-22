import {
    CardBody,
    CardContainer,
    CardHeader,
    CardHeaderContainer,
    CurrentSpend
} from './dashboard-top-card.styles';

const DashboardTopCard = ({ header, body }) => {
    return (
        <CardContainer>
            <CardBody>
                <CardHeaderContainer>
                    <div>
                        <CurrentSpend></CurrentSpend>
                        <CurrentSpendAmount>
                            <SpendAmount>$320</SpendAmount>
                        </CurrentSpendAmount>
                    </div>
                </CardHeaderContainer>
            </CardBody>
        </CardContainer>
    );
};

export default DashboardTopCard;
