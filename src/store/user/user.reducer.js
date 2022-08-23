import { USER_ACTION_TYPES } from './user.types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case USER_ACTION_TYPES.REGISTER_SUCCESS:
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false
            };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.REGISTER_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };
        default:
            return state;
    }
}

export default userReducer;
