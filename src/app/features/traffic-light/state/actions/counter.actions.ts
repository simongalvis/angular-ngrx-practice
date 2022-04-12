import { createAction, props } from '@ngrx/store';

export const countIncremented = createAction(
  '[traffic lights counter] count was incremented'
);

export const countDecremented = createAction(
  '[traffic lights counter] count was decremented'
);

export const countReset = createAction(
  '[traffic lights counter] count was reset'
);

export const counterCount = createAction(
  '[traffic lights counter] count',
  props<{ payload: number }>()
);
