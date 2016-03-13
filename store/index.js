import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors, sort } from './reducers'

let initialState = require('./initialState');

const logger = store => next => action => {
    let result;
    console.group("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

module.exports = (logging = false) => (logging) ?
    applyMiddleware(logger)(createStore)(combineReducers({colors, sort}), initialState) :
    createStore(combineReducers({colors, sort}), initialState);