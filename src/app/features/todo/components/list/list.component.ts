import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoListModel } from '../../models';
import { selectItemListModel, selectRemoveallEnabled } from '../../state';
import { completedItemsCleared } from '../../state/actions/todos.events';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data$!: Observable<TodoListModel>;
  clearEnabled$!: Observable<boolean>;
  showFilter = environment.showFilter;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.data$ = this.store.select(selectItemListModel);
    this.clearEnabled$ = this.store.select(selectRemoveallEnabled);
  }

  clearItems() {
    this.store.dispatch(completedItemsCleared());
  }
}
