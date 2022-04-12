import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterModel } from '../../models';
import { selectCounterModel } from '../../state';
import * as actions from '../../state/actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  model$!: Observable<CounterModel>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.model$ = this.store.select(selectCounterModel);
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
