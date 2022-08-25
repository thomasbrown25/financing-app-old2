import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { setAuthToken } from '../utils/api/api';

import { rootReducer } from './root-reducer';

import thunk from 'redux-thunk';

const initialState = {};

const middleware = [
    thunk,
    process.env.NODE_ENV !== 'production' && logger
].filter(Boolean);

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

/*
  initialize current state from redux store for subscription comparison
  preventing undefined error
 */
let currentState = store.getState();

store.subscribe(() => {
    // keep track of the previous and current state to compare changes
    let previousState = currentState;
    currentState = store.getState();
    console.log('getting state from store');
    // if the token changes set the value in localStorage and axios headers
    if (previousState.user.token !== currentState.user.token) {
        const token = currentState.user.token;
        setAuthToken(token);
    }
});

export default store;
