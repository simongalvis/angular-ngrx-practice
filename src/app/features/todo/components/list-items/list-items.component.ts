import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoListModel } from '../../models';
import { itemCompleted } from '../../state/actions/todos.events';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, // quit being so paranoid.
})
export class ListItemsComponent implements OnInit {
  // On push only tracks:
  // data passed in as an Input()
  // OR any Observable or Promise.
  @Input() model: TodoListModel | null = null;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  markCompleted(id: string) {
    this.store.dispatch(itemCompleted({ payload: id }));
  }
}
