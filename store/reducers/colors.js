import C from '../../constants'
import color from './color'

const colors = (state = [], action = {type: null}) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [...state, color({}, action)];
        case C.RATE_COLOR :
            return state.map(c => (c.id === action.id) ? color(c, action) : c);
        case C.REMOVE_COLOR :
            return state.filter(c => c.id !== action.id);
        default:
            return state;
    }
};

module.exports = colors;