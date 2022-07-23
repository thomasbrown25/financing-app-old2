import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 0px;
    -webkit-box-align: stretch;
    align-items: stretch;
    position: relative;
    margin-bottom: 32px;
    &:last-child {
        margin-bottom: 0;
    }
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

export const CardHeaderText = styled.span`
    font-size: 12px;
    line-height: 1.4;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: bold;
    transition: color 150ms ease 0s;
    color: rgb(28, 27, 26);
`;

export const Grid = styled.div`
    width: 100%;
`;
