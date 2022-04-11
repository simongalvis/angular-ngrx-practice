import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightComponent } from './components/light/light.component';
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
        path: '**',
        redirectTo: 'light',
      },
    ],
  },
];

@NgModule({
  declarations: [TrafficLightComponent, LightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficLightModule {}
