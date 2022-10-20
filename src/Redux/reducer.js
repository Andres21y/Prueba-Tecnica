import { SAVE_EMAIL } from './actions'

const initialState = {
    global: []
}

export default function rootReducer(state = initialState, action) {

    switch (action.type) {
        case SAVE_EMAIL:
            return {
                ...state,
                global: action.payload
            }
        default:
            return state;
    }
}