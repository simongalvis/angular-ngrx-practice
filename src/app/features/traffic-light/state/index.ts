export const featureName = 'featureTrafficLights';

import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromLights from './reducers/light.reducer';

export interface TrafficFeatureState {
  lights: fromLights.LightState;
}

export const reducers: ActionReducerMap<TrafficFeatureState> = {
  lights: fromLights.reducer,
};

// 1. Create a Feature Selector (functions that are queries)

const selectFeature = createFeatureSelector<TrafficFeatureState>(featureName);
// 2. Create a selector for each "branch" of the state.

const selectLightsBranch = createSelector(selectFeature, (f) => f.lights);
// 3. Any "Helpers" (optional)

// 4. What the components need (light component needs the color.)

export const selectLightColor = createSelector(
  selectLightsBranch,
  (b) => b.color
);
