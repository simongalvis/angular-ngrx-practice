import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as documents from '../actions/todo.documents';

export interface ItemEntity {
  id: string;
  description: string;
  completed: boolean;
}

export interface ItemState extends EntityState<ItemEntity> {}

export const adapter = createEntityAdapter<ItemEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(documents.todoList, (s, a) => adapter.setAll(a.payload, s)),
  on(documents.todo, (s, a) => adapter.addOne(a.payload, s))
);
