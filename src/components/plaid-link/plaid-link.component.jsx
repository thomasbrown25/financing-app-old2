import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const PlaidLink = ({ linkToken }) => {
    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            // send public_token to server
            console.log('success link token');
        },
        onExit: (error) => {
            console.log(error);
        }
    });

    return (
        <Button variant='contained' onClick={() => open()} disabled={!ready}>
            Get Started
        </Button>
    );
};
export default PlaidLink;
