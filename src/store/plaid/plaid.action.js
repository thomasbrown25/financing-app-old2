import { PLAID_ACTION_TYPES } from './plaid.types';
import { createAction } from '../../utils/reducer/reducer.utils';

// Action Creators
export const fetchAccessTokenStart = (publicToken) => {
    createAction(PLAID_ACTION_TYPES.ACCESS_TOKEN_START, publicToken);
};

export const fetchAccessTokenSuccess = (accessToken) => {
    createAction(PLAID_ACTION_TYPES.ACCESS_TOKEN_SUCCESS, accessToken);
};

export const fetchAccessTokenFailed = (error) => {
    createAction(PLAID_ACTION_TYPES.ACCESS_TOKEN_FAILED, error);
};
