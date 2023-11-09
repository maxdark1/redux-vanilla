import { Action } from './ngrx-fake/ngrx';
import { incremetAction, decrementAction, multiplierAction, divideAction, resetAction } from './incrementor/incrementor.actions';
import { Incrementorreducer } from './incrementor/incrementor.reducer';




console.log(Incrementorreducer(10, incremetAction));
console.log(Incrementorreducer(10, decrementAction));
console.log(Incrementorreducer(10, multiplierAction));
console.log(Incrementorreducer(10, divideAction));
console.log(Incrementorreducer(10, resetAction))