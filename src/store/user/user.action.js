import axios from 'axios';
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
    }
};

/** Calls the API service to login a user and returns a user object
 ** POST: "/auth/login"
 * @param reqBody: { username, email, password }
 **/
export const login = (reqBody) => async (dispatch) => {
    try {
        console.log('calling login api');
        const response = await api.post('/auth/login', reqBody);

        dispatch({
            type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
            payload: response.data
        });

        dispatch(loadUser());
    } catch (error) {
        console.log(error, error.message);
    }
};

/** Calls the API service to get user data and load user
 ** POST: "/auth"
 * @param reqBody: { username, email, password }
 **/
export const loadUser = () => async (dispatch) => {
    try {
        console.log(api.defaults.headers);
        const token = localStorage.getItem('token');

        if (!token) {
            console.log('did not get token from storage');
            dispatch({
                type: USER_ACTION_TYPES.USER_LOADED_FAILED,
                payload: 'no token in local storage'
            });
            return;
        }

        console.log('about to make auth call');

        const response = await api.post('/auth', token);
        console.log(response);

        dispatch({
            type: USER_ACTION_TYPES.USER_LOADED,
            payload: response.data
        });
    } catch (error) {
        console.log(error, error.message);
    }
};
