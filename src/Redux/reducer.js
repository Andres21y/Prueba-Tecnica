import { GET_API_INFO } from './actions'

const initialState = {
    global: {}
}

export default function rootReducer(state = initialState, action) {
    console.log('type and payload__>', action);

    switch (action.type) {
        case GET_API_INFO:
            return {
                ...state,
                global: action.payload
            }
        default:
            return state;
    }
}