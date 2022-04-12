import { ActionReducerMap } from '@ngrx/store';
import * as fromItems from './reducers/items.reducer';



export const featureName = 'featureTodos';



export interface TodoState {
  items: fromItems.ItemState;
}



export const reducers: ActionReducerMap<TodoState> = {
  items: fromItems.reducer,
};
