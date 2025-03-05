import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '@store/authState/auth.actions';
import { AuthService } from '@services/auth.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { authRequest, authResponse } from '@models/auth.model';

@Injectable()
export class authEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.authenticateUser),
      switchMap(({ user }: { user: authRequest }) =>
        this.authService.authenticate(user).pipe(
          map((response: authResponse) =>
            AuthActions.authenticateUserSuccess({ response }),
          ),
          catchError((error) =>
            of(AuthActions.authenticateUserFailed({ error: error.message })),
          ),
        ),
      ),
    ),
  );
}
