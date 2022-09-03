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
