import { createAction } from '@ngrx/store';

export const countIncremented = createAction(
  '[traffic lights counter] count was incremented'
);

export const countDecremented = createAction(
  '[traffic lights counter] count was decremented'
);
