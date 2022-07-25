import styled from 'styled-components';

export const RecentTransRow = styled.div`
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
    height: 60px;
    cursor: default;
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

export const DateText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    font-weight: 400;
`;

export const NameCell = styled.div`
    width: 100%;
    padding-right: 16px;
    box-sizing: border-box;
    position: relative;
    z-index: 3;
    height: 24px;
    display: flex;
    flex-direction: row;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    cursor: pointer;
`;

export const NameWrapper = styled.div`
    height: 24px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    top: 1px;
`;

export const NameText = styled.span`
    flex: 0 1 auto;
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StatusText = styled.span`
    flex: 0 0 auto;
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    color: rgb(148, 148, 148);
    font-weight: 400;
`;

export const CategoryCell = styled.div`
    position: relative;
    pointer-events: auto;
`;

export const CategoryWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const CategoryLogo = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 24px;
    height: 24px;
`;

export const Svg = styled.svg`
    width: 24;
    height: 24;
    fill: none;
`;

export const CategoryName = styled.div`
    width: 195px;
    /* margin-left: 12px; */
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px dashed transparent;
    padding-bottom: 2.5px;
`;

export const CategoryNameText = styled.span`
    font-size: 15px;
    line-height: 1.3;
    transition: color 150ms ease 0s;
    color: rgb(28, 27, 26);
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
