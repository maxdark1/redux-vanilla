import { incremetAction, multiplierAction } from "./incrementor/incrementor.actions";
import { Incrementorreducer } from "./incrementor/incrementor.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

class Store<T>{
    private state: T;

    constructor( private reducer : Reducer<T>,  state: T){
        this.state = state;
    }

    getState() {
        return this.state;
    }

    dispatch(action: Action){
        this.state = this.reducer(this.state, action);
    }
}


const store = new Store(Incrementorreducer, 10);

console.log(store.getState());
store.dispatch(incremetAction);
store.dispatch(incremetAction);
console.log(store.getState());
store.dispatch(multiplierAction);
console.log(store.getState());