import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/light.actions';

export type LightColors = 'green' | 'red' | 'yellow';
export interface LightState {
  color: LightColors;
}

const initialState: LightState = {
  color: 'green',
};

export const reducer = createReducer(
  initialState,
  on(actions.lightCycled, changeTheColor)
);

// LightState changeTheColor(LightState currentState, Action action)
function changeTheColor(currentState: LightState, action: Action): LightState {
  switch (currentState.color) {
    case 'red':
      return { color: 'green' };
    case 'green':
      return { color: 'yellow' };
    case 'yellow':
      return { color: 'red' };
    default:
      return currentState;
  }
}
