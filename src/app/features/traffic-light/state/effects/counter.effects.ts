import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs';
import { selectCounterCurrent } from '..';
import * as counterActions from '../actions/counter.actions';
import * as featureActions from '../actions/feature.actions';

@Injectable()
export class CounterEffects {
  // logIt$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       tap((a) => console.log(`Got an action of type ${a.type}`))
  //     );
  //   },
  //   { dispatch: false }
  // );

  readCurrentCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(featureActions.featureEntered),
      map(() => localStorage.getItem('current')), // '12' | null
      filter((v) => v !== null), // stop if it is null, but pass on the string number here '12'
      map((val: string | null) => parseInt(val!)), // 12
      map((payload) => counterActions.counterCount({ payload }))
    );
  });

  // when X, write the current count to local storage.
  saveCurrentCount$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(
          counterActions.countDecremented,
          counterActions.countIncremented,
          counterActions.countReset
        ),
        concatLatestFrom(() => this.store.select(selectCounterCurrent)),
        tap(([_, count]) => localStorage.setItem('current', count.toString()))
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
