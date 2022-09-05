import { TRANSACTIONS_ACTION_TYPES } from './transactions.types';

const initialState = {
    transactions: null,
    isLoading: false
};

const transactionsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_SUCCESS:
            return { ...state, transactions: payload };

        case TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_FAILED:
            return {
                ...state,
                error: payload
            };

        default:
            return state;
    }
};

export default transactionsReducer;
