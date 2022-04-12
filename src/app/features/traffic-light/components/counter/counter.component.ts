import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, Subscription } from 'rxjs';
import { selectCounterCurrent } from '../../state';
import * as actions from '../../state/actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit, OnDestroy {
  count$!: Observable<number>;
  subscription: Subscription[] = [];
  constructor(private store: Store) {}
  ngOnDestroy(): void {
    this.subscription.forEach((s) => s.unsubscribe());
  }

  ngOnInit(): void {
    this.count$ = this.store
      .select(selectCounterCurrent)
      .pipe(filter((num) => num % 2 === 0));
    // if you are doing this, you are most likely doing something wrong.
    const sub = this.store
      .select(selectCounterCurrent)
      .pipe(
        filter((num) => num % 2 === 0), // if this is true, continue, otherwise, stop here. always going to event
        map((even) => ({ message: `Even Number!`, value: even })) // even is a number that is even, a string
      )
      .subscribe((c) => console.log(c));

    this.subscription.push(sub);
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    this.store.dispatch(actions.countDecremented());
  }
}
