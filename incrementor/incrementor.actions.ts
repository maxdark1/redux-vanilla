import { Action } from '../ngrx-fake/ngrx';

export const incremetAction : Action = {
    type: 'INCREMENT'
};

export const decrementAction : Action = {
    type: 'DECREMENT'
}

export const multiplierAction : Action = {
    type: 'MULTIPLIER',
    payload: 2
}

export const divideAction : Action = {
    type: 'DIVIDE',
    payload: 2
}

export const resetAction : Action = {
    type: 'RESET'
}