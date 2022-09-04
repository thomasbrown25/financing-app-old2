import { usePlaidLink } from 'react-plaid-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

import { publicTokenExchange } from '../../store/user/user.action';

const PlaidLink = ({ linkToken, publicTokenExchange }) => {
    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: (public_token, metadata) => {
            // send public_token to server
            console.log(metadata);
            publicTokenExchange(metadata.public_token);
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

PlaidLink.propTypes = {
    publicTokenExchange: PropTypes.func.isRequired
};

export default connect(null, { publicTokenExchange })(PlaidLink);
