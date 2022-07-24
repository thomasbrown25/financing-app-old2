import {
    CategoryCell,
    CategoryLogo,
    CategoryName,
    CategoryNameText,
    CategoryWrapper,
    Cell,
    DateText,
    NameCell,
    NameText,
    NameWrapper,
    RecentTransRow,
    StatusText,
    Svg
} from './recent-transaction.styles';

const RecentTransaction = ({ date, name, status, logo, category, amount }) => {
    return (
        <RecentTransRow>
            <Cell>
                <DateText>{date}</DateText>
            </Cell>
            <Cell />
            <Cell>
                <NameCell>
                    <NameWrapper>
                        <NameText>{name} </NameText>
                        <StatusText>{status}</StatusText>
                    </NameWrapper>
                </NameCell>
            </Cell>
            <Cell>
                <CategoryCell>
                    <CategoryWrapper>
                        <CategoryLogo>
                            <Svg />
                        </CategoryLogo>
                        <CategoryName>
                            <CategoryNameText>{category}</CategoryNameText>
                        </CategoryName>
                    </CategoryWrapper>
                </CategoryCell>
            </Cell>
            <Cell>Actions cell</Cell>
            <Cell>{amount}</Cell>
        </RecentTransRow>
    );
};

export default RecentTransaction;
