import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromAsteroids from './asteroids.reducer';

export interface AsteroidsMasterState {
  asteroids: fromAsteroids.AsteroidState;
}

export const reducers: ActionReducerMap<AsteroidsMasterState> = {
  asteroids: fromAsteroids.reducer,
};

export const getAsteroidsState = createFeatureSelector<AsteroidsMasterState>(
  'asteroids'
);

// asteroids state
export const getAsteroidState = createSelector(
  getAsteroidsState,
  (state: AsteroidsMasterState) => state.asteroids
);

export const getAllAsteroids = createSelector(getAsteroidState, fromAsteroids.getAsteroids);

export const getAsteroidsLoaded = createSelector(
  getAsteroidState,
  fromAsteroids.getAsteroidsLoaded
);
export const getPizzasLoading = createSelector(
  getAsteroidState,
  fromAsteroids.getAsteroidsLoading
);