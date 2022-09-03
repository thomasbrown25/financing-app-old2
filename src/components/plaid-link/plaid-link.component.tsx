import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePlaidLink } from 'react-plaid-link';
import Button from 'plaid-threads/Button';

import { selectPlaid } from '../../store/plaid/plaid.selector';

import { PLAID_ACTION_TYPES } from '../../store/plaid/plaid.types';

const PlaidLink = () => {
    const dispatch = useDispatch();
    const { linkToken } = useSelector(selectPlaid);

    const onSuccess = React.useCallback(
        (public_token: string) => {
            // send public_token to server
            const setToken = async () => {
                const response = await fetch('/api/set_access_token', {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: `public_token=${public_token}`
                });
                if (!response.ok) {
                    dispatch({
                        type: PLAID_ACTION_TYPES.ACCESS_TOKEN_FAILED,
                        payload: {
                            itemId: `no item_id retrieved`,
                            accessToken: `no access_token retrieved`,
                            isItemAccess: false
                        }
                    });
                    return;
                }
                const data = await response.json();
                dispatch({
                    type: PLAID_ACTION_TYPES.ACCESS_TOKEN_SUCCESS,
                    payload: {
                        itemId: data.item_id,
                        accessToken: data.access_token,
                        isItemAccess: true
                    }
                });
            };
            setToken();
            dispatch({ type: 'SET_STATE', payload: { linkSuccess: true } });
            window.history.pushState('', '', '/');
        },
        [dispatch]
    );

    let isOauth = false;
    const config: Parameters<typeof usePlaidLink>[0] = {
        token: linkToken!,
        onSuccess
    };

    if (window.location.href.includes('?oauth_state_id=')) {
        // TODO: figure out how to delete this ts-ignore
        // @ts-ignore
        config.receivedRedirectUri = window.location.href;
        isOauth = true;
    }

    const { open, ready } = usePlaidLink(config);

    useEffect(() => {
        if (isOauth && ready) {
            open();
        }
    }, [ready, open, isOauth]);

    return (
        <Button type='button' large onClick={() => open()} disabled={!ready}>
            Launch Link
        </Button>
    );
};

PlaidLink.displayName = 'Link';

export default PlaidLink;
