import axios from 'axios';
import store from '../../store/store';
// import { LOGOUT } from '../actions/types';

// Create an instance of axios
export const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json'
    }
});
console.log('creating api instance');

/*
  NOTE: intercept every request and set the
  Authorization header so that all requests
  have this header.
*/

// api.interceptors.request.use(
//     (config) =>
//         (config.headers['Authorization'] = localStorage.getItem('token')
//             ? `Bearer ${localStorage.getItem('token')}`
//             : ''),
//     (error) => Promise.reject(error)
// );

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
        if (err.response && err.response.status === 401) {
            //store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);

export const setAuthToken = (token) => {
    console.log('setting auth token: ' + token);
    if (token) {
        api.defaults.headers.common['Authorization'] = token;
        localStorage.setItem('token', token);
    } else {
        // delete api.defaults.headers.common['bearer'];
        // localStorage.removeItem('token');
    }
};
