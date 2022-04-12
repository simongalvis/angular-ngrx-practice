import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoFeatureEntered } from './state/actions/feature.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(store: Store) {
    store.dispatch(todoFeatureEntered());
  }
}
