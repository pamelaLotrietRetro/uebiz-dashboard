import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { AuthService } from '@app/shared/services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { authRequest, authResponse } from '@app/shared/models/auth.model';

@Injectable()
export class authEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authenticateUser),
      switchMap(({ user }: { user: authRequest }) =>
        this.authService.authenticate(user).pipe(
          map((response: authResponse) =>
            AuthActions.authenticateUserSuccess({ response })
          ),
          catchError((error) =>
            of(AuthActions.authenticateUserFailed({ error: error.message }))
          )
        )
      )
    )
  );
}
