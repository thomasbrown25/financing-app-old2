import { takeLatest, put, all, call } from 'redux-saga/effects';

import { PLAID_ACTION_TYPES } from './plaid.types';

import {
    fetchAccessTokenSuccess,
    fetchAccessTokenFailed
} from './plaid.action';
import { sendPublicTokenToServer } from '../../utils/api/api-plaid.utils';

export function* fetchAccessToken() {
    try {
        const accessToken = yield call(sendPublicTokenToServer);
        yield put(fetchAccessTokenSuccess(accessToken));
    } catch (error) {
        yield put(fetchAccessTokenFailed(error));
    }
}

export function* onFetchAccessToken() {
    yield takeLatest(PLAID_ACTION_TYPES.ACCESS_TOKEN_START, fetchAccessToken);
}

export function* plaidSaga() {
    yield all([call(onFetchAccessToken)]);
}
