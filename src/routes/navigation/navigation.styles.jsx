import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    font-family: 'Rocket Sans', sans-serif;
    width: 240px;
    display: flex;
    flex-direction: column;
    overflow: visible auto;
    flex-shrink: 0;
    background: rgb(255, 255, 255);
    transition: width 250ms ease 0s;
    box-shadow: rgb(0 0 0 / 6%) 0px 4px 12px;
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: 9;
`;

export const LogoContainer = styled(Link)`
    /* height: 100%;
    width: 70px;
    padding: 25px; */
    padding: 20px 16px 20px 20px;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(242, 242, 242);
    -webkit-box-align: center;
    -webkit-box-pack: justify;
`;

export const NavMenu = styled.div`
    width: 100%;
    padding: 20px 12px 20px 20px;
    margin-top: 0px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
`;

export const NavLinks = styled.div`
    -webkit-font-smoothing: antialiased;
    display: block;
    cursor: pointer;
`;

export const NavLink = styled(Link)`
    padding: 12px;
    margin: 4px 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    user-select: none;
    border: 1px solid transparent;
    transition: background-color 250ms ease 0s;
    color: 'black';
    /* color: ${(props) =>
        props.active === 'true' ? 'rgb(28, 122, 249)' : 'black'}; */
    &:hover {
        color: rgb(28, 122, 249);
    }
`;

export const NavSpacer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex: 1 1 0%;
`;

export const NavFooter = styled.div`
    padding: 4px 0px;
    border-top: 1px solid rgb(242, 242, 242);
`;

export const NavFooterItem = styled.div`
    padding: 12px;
    margin: 4px 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    user-select: none;
    border: 1px solid transparent;
    transition: background-color 250ms ease 0s;
    flex-direction: column;
    min-width: 0px;
`;
