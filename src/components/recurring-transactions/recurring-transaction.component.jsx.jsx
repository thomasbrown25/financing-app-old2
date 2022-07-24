import {
    Row,
    ColumnCell,
    GridCell,
    NameLogoCell,
    LogoImage,
    NameCell,
    NameCellText,
    NameCellSubText,
    AccountColumn,
    AccountColumnLogo,
    AccountLogo,
    CellText,
    DueColumn
} from './recurring-transactions.styles';

const RecurringTransaction = ({
    to,
    nameLogo,
    nameText,
    nameSubText,
    accountLogo,
    accountText,
    dueText,
    amountDueText
}) => {
    return (
        <GridCell to={to}>
            <Row>
                <ColumnCell>
                    <NameLogoCell>
                        <LogoImage />
                    </NameLogoCell>
                    <NameCell>
                        <NameCellText>{nameText}</NameCellText>
                        <NameCellSubText>{nameSubText}</NameCellSubText>
                    </NameCell>
                </ColumnCell>
                <ColumnCell>
                    <AccountColumn>
                        <AccountColumnLogo>
                            <AccountLogo />
                        </AccountColumnLogo>
                        <CellText>{accountText}</CellText>
                    </AccountColumn>
                </ColumnCell>
                <ColumnCell>
                    <DueColumn>
                        <CellText>{dueText}</CellText>
                    </DueColumn>
                </ColumnCell>
                <ColumnCell>
                    <CellText>{amountDueText}</CellText>
                </ColumnCell>
            </Row>
        </GridCell>
    );
};
// ••2413

export default RecurringTransaction;
