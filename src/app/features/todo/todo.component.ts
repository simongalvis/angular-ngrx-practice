import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItemsLoaded } from './state';
import { todoFeatureEntered } from './state/actions/feature.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  itemsLoaded$!: Observable<boolean>;
  constructor(private store: Store) {
    store.dispatch(todoFeatureEntered());
  }
  ngOnInit(): void {
    this.itemsLoaded$ = this.store.select(selectItemsLoaded);
  }
}
