import { TYPE_INCREMENT, TYPE_DECREMENT, TYPE_RESET } from './actionTypes.js'

export const increment = () => ({
    type: TYPE_INCREMENT,
})

export const decrement = () => ({
    type: TYPE_DECREMENT,
})

export const reset = () => ({
    type: TYPE_RESET
})