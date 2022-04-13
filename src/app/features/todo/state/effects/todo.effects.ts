import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map, mergeMap, switchMap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import * as featureEvents from '../actions/feature.actions';
import * as todoCommands from '../actions/todo.commands';
import * as todoDocuments from '../actions/todo.documents';
import * as todoEvents from '../actions/todos.events';
import { selectTodoListEntities } from '../index';
import { ItemEntity } from '../reducers/items.reducer';

@Injectable()
export class TodoEffects {
  readonly baseUrl = environment.apiUrl;
  todoCreated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoEvents.todoItemCreated),
      map(
        (
          { description } // parameter destructuring ({ description: 'tacos'}), this plucks out just that property
        ) => todoCommands.addTodo({ payload: { description } })
      )
    );
  });
  // many good programmers fight me on this.
  todoCreatedCreateTemporaryTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoEvents.todoItemCreated),
      map(({ description }) =>
        todoCommands.addTemporaryTodo({ payload: { description } })
      )
    );
  });
  // Map Events to Commands
  // - so, when todoFeatureEntered, say loadTheTodos
  fakeId = 1; // variable! And we MUTATING IT!! OMG!!

  removeCompletedItems$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(todoEvents.completedItemsCleared),
        switchMap(() => this.client.delete(this.baseUrl + '/completed-todos'))
      );
    },
    { dispatch: false }
  );
  markItemCompleted$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(todoEvents.itemCompleted), // I just have the id of the thing
        concatLatestFrom(() => this.store.select(selectTodoListEntities)), //
        map(([action, entities]) => entities[action.payload]),
        mergeMap((payload) =>
          this.client.put(this.baseUrl + '/completed-todos', payload)
        )
      );
    },
    { dispatch: false }
  );

  createTempTodoItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoCommands.addTemporaryTodo),
      map(({ payload }) =>
        todoDocuments.temporaryTodo({
          payload: { ...payload, id: 'T' + this.fakeId++, completed: false },
        })
      )
    );
  });

  saveTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoDocuments.temporaryTodo),
      concatMap((action) =>
        this.client
          .post<ItemEntity>(this.baseUrl + '/todos', action.payload)
          .pipe(
            map((payload) =>
              todoDocuments.todo({ payload, tempId: action.payload.id })
            )
          )
      )
    );
  });

  loadTodosWhenFeatureEntered$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureEvents.todoFeatureEntered),
      map(() => todoCommands.loadTodos())
    );
  });
  // Handle commands
  //  - whenLoadTodos happens, go get them and either:
  //  - return a document with the todos (happy/success)
  //    or raise an event that says it failed (sad!)

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(todoCommands.loadTodos), // if it's time to load the todos
      switchMap(() =>
        // do an async operation in the middle of our observable stream
        this.client.get<{ data: ItemEntity[] }>(this.baseUrl + '/todos').pipe(
          map((response) => response.data),
          map((payload) => todoDocuments.todoList({ payload })) // in the future, a document with our todo list.
        )
      )
    );
  });

  constructor(
    private store: Store,
    private actions$: Actions,
    private client: HttpClient
  ) {}
}
