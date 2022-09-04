import { api } from '../../utils/api/api';

import { USER_ACTION_TYPES } from './user.types';

/** Calls the API service to register a user and returns a jwt token
 ** POST: "/auth/register"
 * @param reqBody: { username, email, password }
 **/
export const register = (reqBody) => async (dispatch) => {
    try {
        const response = await api.post('/auth/register', reqBody);

        dispatch({
            type: USER_ACTION_TYPES.REGISTER_SUCCESS,
            payload: response.data
        });

        dispatch(loadUser());
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: USER_ACTION_TYPES.SIGN_IN_FAILED,
            payload: error?.response?.data.message
        });
    }
};

/** Calls the API service to login a user and returns a user object
 ** POST: "/auth/login"
 * @param reqBody: { email, password }
 **/
export const login = (reqBody) => async (dispatch) => {
    try {
        const response = await api.post('/auth/login', reqBody);

        dispatch({
            type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
            payload: response.data.data
        });

        dispatch(loadUser());
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: USER_ACTION_TYPES.SIGN_IN_FAILED,
            payload: error?.response?.data.message
        });
    }
};

/** Calls the API service to get user data and load user
 ** GET: "/auth/load-user"
 * @param reqBody: {  }
 **/
export const loadUser = () => async (dispatch) => {
    try {
        const response = await api.get('/auth/load-user');

        dispatch({
            type: USER_ACTION_TYPES.USER_LOADED,
            payload: response.data.data
        });
    } catch (error) {
        console.log(error, error.message);
    }
};

/** Logs out the user by removing the jwt token in local storage
 * @param reqBody: {  }
 **/
export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('token');
        dispatch({
            type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
        });
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: USER_ACTION_TYPES.SIGN_OUT_FAILED
        });
    }
};

/**
 * PLAID ACTIONS ******
 * */

/** Calls financing-api which calls Plaid api "/api/create_link_token" which
 *  returns a link-token.
 ** GET: "/plaid/create-link-token"
 * @param reqBody: { }
 **/
export const createLinkToken = () => async (dispatch) => {
    try {
        const response = await api.get('/plaid/create-link-token');

        dispatch({
            type: USER_ACTION_TYPES.CREATE_LINK_TOKEN_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: USER_ACTION_TYPES.CREATE_LINK_TOKEN_FAILED,
            payload: error?.response?.data.message
        });
    }
};

/** Calls financing-api which calls Plaid api "/public_token/exchange" and exhanges
 *  the publicToken for the accessToken
 ** POST: "/plaid/public-token-exchange"
 * @param publicToken: string: publicToken
 **/
export const publicTokenExchange = (publicToken) => async (dispatch) => {
    try {
        const response = await api.post(
            '/plaid/public-token-exchange',
            `"${publicToken}"`
        );

        console.log(response.data);
        dispatch({
            type: USER_ACTION_TYPES.PUBLIC_TOKEN_EXCHANGE_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: USER_ACTION_TYPES.PUBLIC_TOKEN_EXCHANGE_FAILED,
            payload: error?.response?.data.message
        });
    }
};
