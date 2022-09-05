import { api } from '../../utils/api/api';

import { TRANSACTIONS_ACTION_TYPES } from './transactions.types';

/** Calls the financing-api service to get transactions from plaid api
 ** GET: "/plaid/transactions"
 * @param reqBody: string: accessToken
 **/
export const getTransactions = () => async (dispatch) => {
    try {
        const response = await api.get('/plaid/transactions');

        console.log(response);

        dispatch({
            type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_SUCCESS,
            payload: response.data.data
        });
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: TRANSACTIONS_ACTION_TYPES.GET_TRANSACTIONS_FAILED,
            payload: error?.response?.data.message
        });
    }
};
