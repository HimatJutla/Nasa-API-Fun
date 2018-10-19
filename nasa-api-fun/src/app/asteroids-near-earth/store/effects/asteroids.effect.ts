import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as asteroidActions from '../actions/asteroids.action';
import * as fromServices from '../../asteroids-near-earth.service';

@Injectable()
export class AsteroidsEffects {
  constructor(
    private actions$: Actions,
    private asteroidService: fromServices.AsteroidsNearEarthService
  ) {}

  @Effect()
  loadAsteroids$ = this.actions$.ofType(asteroidActions.LOAD_ASTEROIDS).pipe(
    switchMap(() => {
      return this.asteroidService
        .getNearEarthAsteroids()
        .pipe(
          map(asteroids => new asteroidActions.LoadAsteroidsSuccess(asteroids)),
          catchError(error => of(new asteroidActions.LoadAsteroidsFail(error)))
        );
    })
  );
}