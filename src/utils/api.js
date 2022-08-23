import axios from 'axios';
import { useDispatch } from 'react-redux';
import { USER_ACTION_TYPES } from '../store/user/user.types';

// Create an instance of axios
const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response.status === 401) {
            const dispatch = useDispatch();
            dispatch({ type: USER_ACTION_TYPES.SIGN_OUT_START });
        }
        return Promise.reject(err);
    }
);

export default api;
