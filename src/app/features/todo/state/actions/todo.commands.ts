import { createAction, props } from '@ngrx/store';

export const loadTodos = createAction('[todos] command load the todos');

export const addTodo = createAction(
  '[todos] command add todo',
  props<{ payload: { description: string } }>()
);
