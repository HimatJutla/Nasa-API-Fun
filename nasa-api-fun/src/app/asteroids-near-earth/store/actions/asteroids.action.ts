import { Action } from '@ngrx/store';
import { Asteroid } from '../../models/asteroid-interface';

// Action Consts
export const LOAD_ASTEROIDS = '[Asteroids] Load Asteroids';
export const LOAD_ASTEROIDS_FAIL = '[Asteroids] Load Asteroids Fail';
export const LOAD_ASTEROIDS_SUCCESS = '[Asteroids] Load Asteroids Success';

// Actions
export class LoadAsteroids implements Action {
  readonly type = LOAD_ASTEROIDS;
}

export class LoadAsteroidsFail implements Action {
  readonly type = LOAD_ASTEROIDS_FAIL;
  constructor(public payload: any) {}
}

export class LoadAsteroidsSuccess implements Action {
  readonly type = LOAD_ASTEROIDS_SUCCESS;
  constructor(public payload: {}) {}
}

// action types
export type AsteroidActions = LoadAsteroids | LoadAsteroidsFail | LoadAsteroidsSuccess;