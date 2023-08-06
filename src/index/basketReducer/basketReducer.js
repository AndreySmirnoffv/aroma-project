let initialState = [];

const ADD = 'ADD';
const REMOVE = 'REMOVE';

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.payload
            ]
        case REMOVE:
            return state.filter(item => item.currentItem.id !== action.payload);
        default:
            return state
    }
}