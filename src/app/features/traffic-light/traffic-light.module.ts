import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrafficLightComponent } from './traffic-light.component';

const routes: Routes = [
  {
    path: '', // ?? It's up to the app module what to call this.
    component: TrafficLightComponent,
  },
];

@NgModule({
  declarations: [TrafficLightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficLightModule {}
