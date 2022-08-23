import { PLAID_ACTION_TYPES } from './plaid.types';

const INITIAL_STATE = {
    itemId: null,
    accessToken: null,
    isItemAccess: false,
    linkSuccess: false,
    isLoading: false
};

export const plaidReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case PLAID_ACTION_TYPES.ACCESS_TOKEN_START:
            return { ...state, isLoading: true };

        case PLAID_ACTION_TYPES.ACCESS_TOKEN_SUCCESS:
            return {
                ...state,
                itemId: payload.item_id,
                accessToken: payload.access_token,
                isItemAccess: true
            };

        case PLAID_ACTION_TYPES.ACCESS_TOKEN_FAILED:
            return {
                ...state,
                error: payload,
                itemId: 'no item_id retrieved',
                accessToken: null,
                isItemAccess: false
            };

        default:
            return state;
    }
};
