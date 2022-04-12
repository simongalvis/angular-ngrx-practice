import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListComponent } from './components/list/list.component';
import { featureName, reducers } from './state';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: 'entry',
        component: EntryComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    EntryComponent,
    ListItemsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ],
  exports: [RouterModule],
})
export class TodoModule {}
