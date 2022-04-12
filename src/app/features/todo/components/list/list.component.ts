import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListModel } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data$!: Observable<TodoListModel>;
  constructor() {}

  ngOnInit(): void {}
}
