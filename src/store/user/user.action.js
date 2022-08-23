import { auth } from '../../utils/api/api';

import { USER_ACTION_TYPES } from './user.types';

/** Calls the API service to register a user
 ** POST: "/auth/register"
 * @param reqBody: { username, email, password }
 **/
export const register = (reqBody) => async (dispatch) => {
    try {
        const response = await auth.post('/register', reqBody);

        dispatch({
            type: USER_ACTION_TYPES.REGISTER_SUCCESS,
            payload: response.data
        });

        dispatch(loadUser());
    } catch (error) {
        console.log(error, error.message);
    }
};

/** Calls the API service to get user data and load user
 ** GET: "/auth"
 * @param reqBody: { username, email, password }
 **/
export const loadUser = () => async (dispatch) => {
    try {
        const response = await auth.get('/');

        dispatch({
            type: USER_ACTION_TYPES.USER_LOADED,
            payload: response.data
        });
    } catch (error) {
        console.log(error, error.message);
    }
};
