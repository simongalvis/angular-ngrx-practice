import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ListComponent } from './components/list/list.component';
import { featureName, reducers } from './state';
import { TodoEffects } from './state/effects/todo.effects';
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
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [RouterModule],
})
export class TodoModule {}
