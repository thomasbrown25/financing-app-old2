import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    margin-left: 450px;
`;

export const Container = styled.div`
    position: absolute;
    inset: 0px;
    display: flex;
    flex-direction: row;
`;

export const LayoutContainer = styled.div`
    margin-left: 240px;
    width: 100%;
    min-height: 100vh;
    background-color: rgb(251, 251, 251);
    display: flex;
    flex-direction: column;
`;

export const LayoutMain = styled.main`
    background-color: rgb(251, 251, 251);
    overflow-y: auto;
`;

export const LayoutContent = styled.div`
    padding: 64px;
    width: 100%;
    max-width: 1600px;
    margin: 0px auto;
    box-sizing: border-box;
`;

export const LayoutHeader = styled.header`
    width: 100%;
    flex: 0 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 40px;
    color: rgb(28, 27, 26);
    position: relative;
    z-index: 2;
`;

export const Header = styled.div`
    width: 100%;
    flex: 1 1 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const HeaderText = styled.span`
    font-size: 30px;
    line-height: 1.12;
    transition: color 150ms ease 0s;
    color: rgb(28, 27, 26);
    font-weight: bold;
`;

export const MainColumn = styled.div`
    min-width: 0px;
`;

export const SideColumn = styled.div`
    min-width: 0px;
    max-width: 370px;
`;
