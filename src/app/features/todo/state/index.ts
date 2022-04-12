import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromItems from './reducers/items.reducer';

export const featureName = 'featureTodos';

export interface TodoState {
  items: fromItems.ItemState;
}

export const reducers: ActionReducerMap<TodoState> = {
  items: fromItems.reducer,
};

// 1. Feature Select

const selectTodosFeature = createFeatureSelector<TodoState>(featureName);

// 2. Selector Per Branch

const selectItemsBranch = createSelector(selectTodosFeature, (f) => f.items);
