import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '@store/authState/auth.actions';
import { selectAuthLoading, selectAuthUser, selectAuthError } from '@store/authState/auth.selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { authRequest } from '@app/shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store = inject(Store);

  authenticateUser(user: authRequest): void {
    this.store.dispatch(AuthActions.authenticateUser({ user }));
  }

  sIsLoading = toSignal(this.store.select(selectAuthLoading));
  sAuthUser = toSignal(this.store.select(selectAuthUser));
  sAuthError = toSignal(this.store.select(selectAuthError));
}
