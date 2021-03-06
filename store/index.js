import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from './reducers'

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
};

module.exports = (logging = false, initialState = require('./initialState')) => {
    let reduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
    if (logging) {
        return applyMiddleware(thunk, logger, saver)(createStore)(
            combineReducers({colors, sort}),
            (localStorage["redux-store"]) ? JSON.parse(localStorage["redux-store"]) : initialState,
            reduxDevTools
        );
    } else {
        return applyMiddleware(thunk)(createStore)(
            combineReducers({colors, sort}),
            (localStorage["redux-store"]) ? JSON.parse(localStorage["redux-store"]) : initialState
        );
    }
};