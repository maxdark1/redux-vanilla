
// Actions
interface Action {
    type: string;
    payload?: any;
}

// Reducer
const reducer = (state = 10, action : Action) => {
    switch(action.type){
        case 'INCREMENT' :
            return state += 1;
        case 'DECREMENT' :
            return state -= 1;
        case 'MULTIPLIER' :
            return state * action.payload;
        case 'DIVIDE' :
            return state / action.payload;
        default:
            return state;

    }
}

//Usar el reducer

const incremetAction : Action = {
    type: 'INCREMENT'
};

const decrementAction : Action = {
    type: 'DECREMENT'
}

const multiplierAction : Action = {
    type: 'MULTIPLIER',
    payload: 2
}

const divideAction : Action = {
    type: 'DIVIDE',
    payload: 2
}

console.log(reducer(10, incremetAction));
console.log(reducer(10, decrementAction));
console.log(reducer(10, multiplierAction));
console.log(reducer(10, divideAction))