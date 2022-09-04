import { PLAID_ACTION_TYPES } from './plaid.types';

const initialState = {
    itemId: null,
    linkToken: null,
    accessToken: null,
    publicToken: null,
    isItemAccess: false,
    linkSuccess: false,
    isLoading: false
};

export const plaidReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case PLAID_ACTION_TYPES.CREATE_LINK_TOKEN_SUCCESS:
            return { ...state, linkToken: payload };

        case PLAID_ACTION_TYPES.CREATE_LINK_TOKEN_FAILED:
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
