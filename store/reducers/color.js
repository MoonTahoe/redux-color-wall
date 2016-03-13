import C from '../../constants'

const color = (state, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: undefined
            };
        case C.RATE_COLOR:
            return {
                ...state,
                rating: action.rating
            };
        default :
            return state;
    }
};

module.exports = color;