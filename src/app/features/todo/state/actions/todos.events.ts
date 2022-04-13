import { createAction, props } from '@ngrx/store';

export const todoItemCreated = createAction(
  '[todos] event user created a todo item',
  props<{ description: string }>()
);
