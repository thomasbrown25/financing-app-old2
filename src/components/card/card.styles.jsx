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

export const CardHeader = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 20px;
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
