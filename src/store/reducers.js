import { TYPE_INCREMENT, TYPE_DECREMENT, TYPE_RESET } from './actionTypes.js';

const initial_state = {
    counter: 0,
}

export const rootReducer = (state = initial_state, action) => {
    switch (action.type) {
        case TYPE_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case TYPE_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case TYPE_RESET:
            return {
                ...state,
                counter: 0
            }
        default:
            return state;
    }
}