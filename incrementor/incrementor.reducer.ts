import { Action } from '../ngrx-fake/ngrx';
// Reducer
export const Incrementorreducer = (state = 10, action : Action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state += 1;
        case 'DECREMENT' :
            return state -= 1;
        case 'MULTIPLIER' :
            return state * action.payload;
        case 'DIVIDE' :
            return state / action.payload;
        case 'RESET' :
            return state = 0;
        default:
            return state;
    }
}