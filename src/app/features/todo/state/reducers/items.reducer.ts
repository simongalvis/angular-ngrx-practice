import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer } from '@ngrx/store';

export interface ItemEntity {
  id: string;
  description: string;
  completed: boolean;
}

export interface ItemState extends EntityState<ItemEntity> {}

export const adapter = createEntityAdapter<ItemEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(initialState);
