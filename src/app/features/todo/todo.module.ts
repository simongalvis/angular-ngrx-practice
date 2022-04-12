import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
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
  declarations: [TodoComponent, ListComponent, EntryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoModule {}
