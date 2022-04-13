import { createReducer, on } from '@ngrx/store';
import * as todoCommands from '../actions/todo.commands';
import * as todoDocuments from '../actions/todo.documents';
export interface UiHintsState {
  itemsLoaded: boolean;
}

const initialState: UiHintsState = {
  itemsLoaded: false,
};

export const reducer = createReducer(
  initialState,
  on(todoCommands.loadTodos, (s) => ({ ...s, itemsLoaded: false })),
  on(todoDocuments.todoList, (s) => ({ ...s, itemsLoaded: true }))
);
