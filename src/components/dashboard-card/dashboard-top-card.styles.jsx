import styled from 'styled-components';

export const CardContainer = styled.div`
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    position: relative;
`;

export const CardBody = styled.div`
    background-color: rgb(0, 89, 210);
    border-radius: 12px;
    border: 1px solid rgb(242, 242, 242);
    box-shadow: rgb(6 26 54 / 6%) 0px 4px 12px;
    width: -webkit-fill-available;
    overflow: hidden;
    padding: 32px;
`;

export const CardHeaderContainer = styled.div`
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
`;

export const CurrentSpend = styled.span`
    font-size: 14px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
`;

export const CurrentSpendAmount = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    margin-top: 8px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const SpendAmount = styled.span`
    font-size: 40px;
    line-height: 1.12;
    transition: color 150ms ease 0s;
    color: rgb(255, 255, 255);
    font-weight: 500;
`;

export const LastMonthComparisonContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const ComparisonAmount = styled.span`
    font-size: 40px;
    line-height: 1.12;
    transition: color 150ms ease 0s;
    color: rgb(255, 255, 255);
    font-weight: 500;
`;
