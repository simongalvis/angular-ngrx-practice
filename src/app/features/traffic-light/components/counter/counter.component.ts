import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCounterCurrent,
  selectCounterFizzBuzz,
  selectCounterResetButtonDisabled,
} from '../../state';
import * as actions from '../../state/actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  resetDisabled$!: Observable<boolean>;
  fizzBuzz$!: Observable<'fizzbuzz' | 'fizz' | 'buzz' | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fizzBuzz$ = this.store.select(selectCounterFizzBuzz);
    this.count$ = this.store.select(selectCounterCurrent);
    this.resetDisabled$ = this.store.select(selectCounterResetButtonDisabled);
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    this.store.dispatch(actions.countDecremented());
  }

  reset() {
    this.store.dispatch(actions.countReset());
  }
}
