import { createAction } from '@ngrx/store';

export const filteredToShowAll = createAction(
  '[todos] event list filter show all'
);

export const filteredToShowCompleted = createAction(
  '[todos] event list filter show completed'
);

export const filteredToShowIncomplete = createAction(
  '[todos] event list filter show incomplete'
);
