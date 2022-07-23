import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UpcomingCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    position: relative;
    margin-bottom: 0px;
`;

export const CardBodyHeader = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    padding: 24px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const CardBodyHeaderText = styled.span`
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
    transition: color 150ms ease 0s;
    color: rgb(84, 84, 83);
`;

export const CardBodyContentContainer = styled.span`
    border-top: 1px solid rgb(242, 242, 242);
`;

export const ItemContainer = styled(Link)`
    width: 100%;
    outline: none;
    display: block;
    transition: background 150ms ease 0s;
`;

export const Row = styled.div`
    color: inherit;
    display: grid;
    grid-template-columns: 1fr;
    /* border-bottom: 1px solid rgb(242, 242, 242); */
    border-top: 1px solid rgb(242, 242, 242);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    outline: 0px;
    transition: background 150ms ease 0s, box-shadow 150ms ease 0s;
`;

export const Cell = styled.div`
    min-width: 0px;
    padding: 16px 24px;
    position: relative;
    -webkit-box-pack: start;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
`;

export const ItemNameContainer = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-right: 16px;
    min-width: 0px;
`;

export const ItemAmount = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const ItemAmountText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    margin-right: 0px;
    min-width: 0px;
    transition: color 150ms ease 0s;
    text-align: right;
    color: rgb(28, 27, 26);
    font-weight: bold;
`;

export const ItemLogo = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    flex: 0 0 32px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 12.8px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    background-color: rgb(0, 126, 242);
    border-radius: 50%;
    line-height: 1;
`;

export const ItemName = styled.div`
    margin-left: 12px;
    min-width: 0px;
`;

export const ItemNameText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    color: rgb(28, 27, 26);
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
`;

export const ItemNameSubText = styled.span`
    font-size: 13px;
    line-height: 1.5;
    font-weight: 400;
    margin-top: 4px;
    transition: color 150ms ease 0s;
    color: rgb(84, 84, 83);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
`;
