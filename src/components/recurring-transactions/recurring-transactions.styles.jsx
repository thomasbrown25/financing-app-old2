import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecurringSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const RecurringSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    padding: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const RecurringSearch = styled.div`
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    align-self: center;
    border-radius: 44px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(6 26 54 / 6%) 0px 4px 12px;
`;

export const SearchLogoContainer = styled.div`
    position: absolute;
    left: 16px;
`;

export const SearchLogo = styled.div`
    transform: rotate(0deg) translateZ(0px);
    display: flex;
    position: relative;
`;

export const InputSearch = styled.input`
    background: none;
    border: 0px;
    margin: 0px;
    padding: 14px 20px 16px 56px;
    font-family: 'Rocket Sans';
    font-size: 15px;
    line-height: 100%;
    display: block;
    width: 100%;
`;

export const SubscriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    margin-top: 32px;
    -webkit-box-align: stretch;
    align-items: stretch;
    position: relative;
    margin-bottom: 32px;
`;

export const Row = styled.div`
    color: inherit;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    border-bottom: 1px solid rgb(242, 242, 242);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    outline: 0px;
    transition: background 150ms ease 0s, box-shadow 150ms ease 0s;
    &:first {
        height: 52px;
    }
`;

export const Column = styled.div`
    min-width: 0px;
    padding: 16px 24px;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
`;

export const ColumnName = styled.span`
    font-size: 14px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    font-weight: 700;
`;

export const GridCell = styled(Link)`
    width: 100%;
    outline: none;
    display: block;
    transition: background 150ms ease 0s;
`;

export const ColumnCell = styled.div`
    min-width: 0px;
    padding: 16px 24px;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    &:last-child {
        text-align: right;
    }
`;

export const AccountColumn = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 12px;
    border-radius: 27px;
    align-self: baseline;
`;

export const AccountColumnLogo = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    margin-right: 8px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const AccountLogo = styled.img`
    border-radius: 5px;
`;

export const DueColumn = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-pack: end;
    justify-content: flex-end;
`;

export const CellText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    font-weight: 400;
    &:last-child {
        text-align: right;
        font-weight: 500;
    }
`;

export const NameLogoCell = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex: 0 0 32px;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const LogoImage = styled.img`
    border-radius: 50%;
    height: 32px;
    aspect-ratio: auto 32 / 32;
    width: 32px;
`;

export const NameCell = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    padding-right: 16px;
    margin-left: 16px;
    -webkit-box-align: stretch;
    align-items: stretch;
`;

export const NameCellText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    margin-bottom: 4px;
    transition: color 150ms ease 0s;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const NameCellSubText = styled.span`
    font-size: 14px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    color: rgb(84, 84, 83);
    font-weight: 400;
`;
