import C from '../constants'
import { pluck, max } from '../lib/array-helpers'

const addColor = (color, title) => (dispatch, getState) => {
    let nextID = max(pluck("id", getState().colors)) + 1;
    dispatch({
        type: C.ADD_COLOR,
        id: nextID,
        title,
        color,
        timestamp: new Date().toString()
    });
};

const removeColor = id => {
    return { type: C.REMOVE_COLOR, id }
};

const rateColor = (id, rating) => {
    return { type: C.RATE_COLOR, id, rating }
};

module.exports = {addColor,removeColor,rateColor};