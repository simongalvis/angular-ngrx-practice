import { Component, Input, OnInit } from '@angular/core';
import { TodoListModel } from '../../models';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  @Input() model: TodoListModel | null = null;
  constructor() {}

  ngOnInit(): void {}
}
