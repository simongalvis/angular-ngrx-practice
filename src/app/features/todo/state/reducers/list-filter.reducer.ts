import { createReducer, on } from '@ngrx/store';
import * as events from '../actions/list-filter.events';
export interface ListFilterState {
  filterBy: 'all' | 'completed' | 'incomplete';
}

const initialState: ListFilterState = {
  filterBy: 'all',
};

export const reducer = createReducer(
  initialState,
  on(events.filteredToShowAll, (s) => ({ ...s, filterBy: 'all' })),
  on(events.filteredToShowCompleted, (s) => ({ ...s, filterBy: 'completed' })),
  on(events.filteredToShowIncomplete, (s) => ({ ...s, filterBy: 'incomplete' }))
);
