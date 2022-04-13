import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoListModel } from '../../models';
import { selectItemListModel } from '../../state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  data$!: Observable<TodoListModel>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.data$ = this.store.select(selectItemListModel);
  }
}
