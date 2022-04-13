import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromModels from '../models';
import * as fromItems from './reducers/items.reducer';
import * as fromListFilter from './reducers/list-filter.reducer';
export const featureName = 'featureTodos';

export interface TodoState {
  items: fromItems.ItemState;
  listFilter: fromListFilter.ListFilterState;
}

export const reducers: ActionReducerMap<TodoState> = {
  items: fromItems.reducer,
  listFilter: fromListFilter.reducer,
};

// 1. Feature Select

const selectTodosFeature = createFeatureSelector<TodoState>(featureName);

// 2. Selector Per Branch

const selectItemsBranch = createSelector(selectTodosFeature, (f) => f.items);
const selectListFilterBranch = createSelector(
  selectTodosFeature,
  (f) => f.listFilter
);
// 3. "Helpers"

export const selectListFilterKey = createSelector(
  selectListFilterBranch,
  (b) => b.filterBy
);
const {
  selectAll: selectAllItemsArray,
  selectTotal: selectTotalOfItems,
  selectEntities: selectTodoEntities,
} = fromItems.adapter.getSelectors(selectItemsBranch);

const selectTodoListItemModels = createSelector(selectAllItemsArray, (items) =>
  items.map(
    (item) =>
      ({
        ...item,
        isPending: item.id.startsWith('T'),
      } as fromModels.TodoListItemModel)
  )
);

const selectFilteredTodoListItemModels = createSelector(
  selectTodoListItemModels,
  selectListFilterKey,
  (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'completed':
        return items.filter((item) => item.completed === true);
      case 'incomplete':
        return items.filter((item) => item.completed === false);
    }
  }
);

// 4. "Real Things" (the selectors the components will import)

export const selectTodoListEntities = selectTodoEntities;
export const selectItemListModel = createSelector(
  selectFilteredTodoListItemModels, // ItemEntity[]
  selectTotalOfItems, // number
  (items, total) => ({ items, total } as fromModels.TodoListModel)
);

export const selectRemoveallEnabled = createSelector(
  selectTodoListItemModels,
  (m) => m.some((item) => item.completed)
);
