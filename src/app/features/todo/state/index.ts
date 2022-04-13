import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromModels from '../models';
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

// 3. "Helpers"

const { selectAll:selectAllItemsArray, selectTotal:selectTotalOfItems} = fromItems.adapter.getSelectors(selectItemsBranch);

export const selectItemListModel = createSelector(
  selectAllItemsArray, // ItemEntity[]
  selectTotalOfItems, // number
  (items, total) => ({ items, total } as fromModels.TodoListModel)
  );
