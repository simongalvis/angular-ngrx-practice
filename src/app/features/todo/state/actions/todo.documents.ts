import { createAction, props } from '@ngrx/store';
import { ItemEntity } from '../reducers/items.reducer';

export const todoList = createAction(
  '[todos] document todo list',
  props<{ payload: ItemEntity[] }>()
);

export const todo = createAction(
  '[todos] document todo item',
  props<{ payload: ItemEntity }>()
);
