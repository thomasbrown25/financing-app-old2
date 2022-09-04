import { USER_ACTION_TYPES } from './user.types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    currentUser: { linkToken: null, accessToken: null, publicToken: null },
    error: null
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                currentUser: { ...payload },
                error: null
            };

        case USER_ACTION_TYPES.REGISTER_SUCCESS:
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {
                ...state,
                token: payload,
                isAuthenticated: true,
                loading: false,
                error: null
            };

        case USER_ACTION_TYPES.CREATE_LINK_TOKEN_SUCCESS:
            return {
                ...state,
                currentUser: { ...state.currentUser, linkToken: payload },
                error: null
            };

        case USER_ACTION_TYPES.PUBLIC_TOKEN_EXCHANGE_SUCCESS:
            return {
                ...state,
                currentUser: { ...state.currentUser, accessToken: payload },
                error: null
            };

        case USER_ACTION_TYPES.PUBLIC_TOKEN_EXCHANGE_FAILED:
            return {
                ...state,
                error: payload
            };

        case USER_ACTION_TYPES.CREATE_LINK_TOKEN_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.REGISTER_FAILED:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                currentUser: null,
                error: payload
            };

        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                currentUser: null,
                error: null
            };
        default:
            return state;
    }
}

export default userReducer;
