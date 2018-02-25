import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // don't mutate existing state but create new state
            console.log(action)
            
            return [action.payload.data, ...state]
    }

    return state
}
