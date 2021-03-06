import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as documents from '../actions/todo.documents';
import * as events from '../actions/todos.events';
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
  on(events.completedItemsCleared, (s, a) => {
    // todo next sprint: Do this in an effect.
    const ids = s.ids
      .map((id) => s.entities[id])
      .filter((item) => item?.completed)
      .map((item) => item?.id!);
    return adapter.removeMany(ids, s);
  }),
  on(documents.todoList, (s, a) => adapter.setAll(a.payload, s)),
  on(documents.todo, (s, a) => adapter.addOne(a.payload, s)),
  on(documents.todo, (s, a) => adapter.removeOne(a.tempId, s)),
  on(documents.temporaryTodo, (s, a) => adapter.addOne(a.payload, s)),
  on(events.itemCompleted, (s, a) =>
    adapter.updateOne(
      {
        id: a.payload,
        changes: {
          completed: true,
        },
      },
      s
    )
  )
);
