import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { featureEntered } from './state/actions/feature.actions';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css'],
})
export class TrafficLightComponent {
  constructor(store: Store) {
    store.dispatch(featureEntered());
  }
}
