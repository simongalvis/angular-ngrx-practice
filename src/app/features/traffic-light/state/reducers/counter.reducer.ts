import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0,
};

export const reducer = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countDecremented, (s) => ({ current: s.current - 1 })),
  on(actions.countIncremented, (s) => ({ current: s.current + 1 }))
);
