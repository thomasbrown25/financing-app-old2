import { takeLatest, put, all, call } from 'redux-saga/effects';

import { register } from '../../utils/api/auth-service/auth.service';

import { AUTH_ACTION_TYPES } from './user.types';

import { signUpSuccess } from './user.action';
import { onSignUpSuccess } from './user.saga';

// REGISTER
export function* signUp({ payload: { username, email, password } }) {
    try {
        const { data, message } = yield call(register, {
            reqBody: { username, email, password }
        });
        console.log(data, message);
        yield put(signUpSuccess(data));
    } catch (error) {
        yield put(signUpFailed(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(AUTH_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* userSaga() {
    yield all([call(onSignUpStart), call(onSignUpSuccess)]);
}
