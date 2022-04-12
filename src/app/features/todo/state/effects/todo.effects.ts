import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import * as featureEvents from '../actions/feature.actions';
import * as todoCommands from '../actions/todo.commands';
import * as todoDocuments from '../actions/todo.documents';
import { ItemEntity } from '../reducers/items.reducer';

@Injectable()
export class TodoEffects {
  // Map Events to Commands
  // - so, when todoFeatureEntered, say loadTheTodos
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
        this.client
          .get<{ data: ItemEntity[] }>('http://localhost:1337/todos')
          .pipe(
            map((response) => response.data),
            map((payload) => todoDocuments.todoList({ payload }))
          )
      )
    );
  });

  constructor(private actions$: Actions, private client: HttpClient) {}
}
