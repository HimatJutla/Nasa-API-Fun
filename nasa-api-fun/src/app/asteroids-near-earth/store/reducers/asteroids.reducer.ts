import * as fromAsteroids from '../actions/asteroids.action';
import { Asteroid } from '../../models/asteroid-interface';

export interface AsteroidState {
  data: {};
  loaded: boolean;
  loading: boolean;
}

export const initialState: AsteroidState = {
  data: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAsteroids.AsteroidActions
): AsteroidState {
  switch (action.type) {
    case fromAsteroids.LOAD_ASTEROIDS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromAsteroids.LOAD_ASTEROIDS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }

    case fromAsteroids.LOAD_ASTEROIDS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

// Consts for reducer selectors
export const getAsteroidsLoading = (state: AsteroidState) => state.loading;
export const getAsteroidsLoaded = (state: AsteroidState) => state.loaded;
export const getAsteroids = (state: AsteroidState) => state.data;