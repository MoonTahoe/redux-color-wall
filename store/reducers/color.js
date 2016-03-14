import C from '../../constants'

const color = (state = {}, action = {type: null}) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            };
        case C.RATE_COLOR:
            return (state.id !== action.id) ? state : {
                ...state,
                rating: action.rating
            };
        default :
            return state;
    }
};

module.exports = color;