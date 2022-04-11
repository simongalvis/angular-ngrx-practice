import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterCurrent } from '../../state';
import * as actions from '../../state/actions/counter.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$!: Observable<number>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.count$ = this.store.select(selectCounterCurrent);
  }

  increment() {
    this.store.dispatch(actions.countIncremented());
  }
  decrement() {
    this.store.dispatch(actions.countDecremented());
  }
}
