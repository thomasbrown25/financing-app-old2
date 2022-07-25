import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const BaseButton = styled.button`
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
`;

export const GoogleSignInButton = styled(Button)`
    margin: 1em 0 0 !important;
    /* background-color: red !important;
    &:hover {
        background-color: darkred !important;
        border: none !important;
    } */
`;
