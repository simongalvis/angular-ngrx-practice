import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectListFilterKey } from '../../state';
import {
  filteredToShowAll,
  filteredToShowCompleted,
  filteredToShowIncomplete,
} from '../../state/actions/list-filter.events';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.css'],
})
export class ListFilterComponent implements OnInit {
  constructor(private store: Store) {}
  filterKey$!: Observable<'all' | 'completed' | 'incomplete'>;
  ngOnInit(): void {
    this.filterKey$ = this.store.select(selectListFilterKey);
  }

  showAll() {
    this.store.dispatch(filteredToShowAll());
  }

  showCompleted() {
    this.store.dispatch(filteredToShowCompleted());
  }

  showIncomplete() {
    this.store.dispatch(filteredToShowIncomplete());
  }
}
