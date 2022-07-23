import styled from 'styled-components';

export const CardHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const HeaderSubText = styled.span`
    font-size: 12px;
    line-height: 1.5;
    font-weight: 400;
    transition: color 150ms ease 0s;
    color: rgb(84, 84, 83);
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

export const Row = styled.div`
    color: inherit;
    display: grid;
    grid-template-columns: 75px 50px 1.1fr 1fr 0.5fr 0.5fr 50px;
    border-bottom: 1px solid rgb(242, 242, 242);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    outline: 0px;
    transition: background 150ms ease 0s, box-shadow 150ms ease 0s;
    height: 52px;
`;

export const Cell = styled.div`
    min-width: 0px;
    padding: 16px 24px;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
`;

export const Item = styled.span`
    font-size: 14px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    font-weight: bold;
`;
