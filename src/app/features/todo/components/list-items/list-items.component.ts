import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { TodoListModel } from '../../models';

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
  constructor() {}

  ngOnInit(): void {}
}
