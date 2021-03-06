import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: () =>
      import('./features/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'traffic',
    loadChildren: () =>
      import('./features/traffic-light/traffic-light.module').then(
        (m) => m.TrafficLightModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
