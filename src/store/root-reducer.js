import { combineReducers } from 'redux';
import { plaidReducer } from './plaid/plaid.reducer';

import userReducer from './user/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer
});
