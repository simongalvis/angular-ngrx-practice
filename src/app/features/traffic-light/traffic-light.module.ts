import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { LightComponent } from './components/light/light.component';
import { featureName, reducers } from './state';
import { TrafficLightComponent } from './traffic-light.component';

const routes: Routes = [
  {
    path: '', // ?? It's up to the app module what to call this.
    component: TrafficLightComponent,
    children: [
      {
        path: 'light',
        component: LightComponent,
      },
      {
        path: 'counter',
        component: CounterComponent,
      },
      {
        path: '**',
        redirectTo: 'light',
      },
    ],
  },
];

@NgModule({
  declarations: [TrafficLightComponent, LightComponent, CounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ],
  exports: [RouterModule],
})
export class TrafficLightModule {}
