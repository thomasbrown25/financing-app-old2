import { api } from '../../utils/api/api';

import { PLAID_ACTION_TYPES } from './plaid.types';

/** Calls financing-api which calls Plaid api "/api/create_link_token" which
 *  returns a link-token.
 ** GET: "/plaid/create-link-token"
 * @param reqBody: { }
 **/
export const getLinkToken = () => async (dispatch) => {
    try {
        const response = await api.get('/plaid/create-link-token');

        dispatch({
            type: PLAID_ACTION_TYPES.CREATE_LINK_TOKEN_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        console.log(error, error.message);
        dispatch({
            type: PLAID_ACTION_TYPES.CREATE_LINK_TOKEN_FAILED,
            payload: error?.response?.data.message
        });
    }
};
