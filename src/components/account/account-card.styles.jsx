import styled from 'styled-components';

export const AccountCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    box-sizing: border-box;
`;

export const Card = styled.div`
    position: relative;
`;

export const CardHeader = styled.div`
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const CardHeaderText = styled.span`
    font-size: 12px;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: bold;
    transition: color 150ms ease 0s;
    color: rgb(28, 27, 26);
`;

export const CardHeaderUpdatedContainer = styled.span`
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    transition: color 150ms ease 0s;
    color: rgb(84, 84, 83);
`;

export const CardHeaderUpdatedText = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 0px;
    -webkit-box-align: center;
    align-items: center;
`;

export const CardBody = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    border: 1px solid rgb(242, 242, 242);
    box-shadow: rgb(6 26 54 / 6%) 0px 4px 12px;
    width: -webkit-fill-available;
    overflow: hidden;
    padding: 0px;
`;

export const CardBodyGrid = styled.div`
    width: 100%;
`;

export const Row = styled.div`
    color: inherit;
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px solid rgb(242, 242, 242);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    outline: 0px;
    transition: background 150ms ease 0s, box-shadow 150ms ease 0s;
    cursor: pointer;
`;

export const Cell = styled.div`
    min-width: 0px;
    padding: 16px 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.div`
    display: flex;
    padding-right: 16px;
    min-width: 0px;
`;

export const Amount = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const AmountSpan = styled.span`
    font-size: 15px;
    line-height: 1.3;
    margin-right: 0px;
    min-width: 0px;
    transition: color 150ms ease 0s;
    text-align: right;
    color: rgb(28, 27, 26);
    font-weight: bold;
`;
