import { createAction, props } from '@ngrx/store';

export const todoItemCreated = createAction(
  '[todos] event user created a todo item',
  props<{ description: string }>()
);

export const itemCompleted = createAction(
  '[todos] events user completed todo item',
  props<{ payload: string }>()
);
