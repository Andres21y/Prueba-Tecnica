import { SAVE_EMAIL } from './actions'

const initialState = {
    global: []
}
console.log('ñlñlsd',initialState.global);
export default function rootReducer(state = initialState, action) {
    console.log('type and payload__>jjkk', action);

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