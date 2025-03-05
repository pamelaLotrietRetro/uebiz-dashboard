import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { authRequest, authResponse } from '@models/auth.model';

interface AuthState {
  user: authResponse | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, authService = inject(AuthService)) => ({
    authenticateUser(user: authRequest) {
      patchState(store, { isLoading: true, error: null });
      console.log('AuthStore: authenticateUser called', { user });

      authService.authenticate(user).subscribe({
        next: (response) => {
          patchState(store, { user: response, isLoading: false });
          console.log('AuthStore: authenticateUserSuccess', { response });
        },
        error: (error) => {
          patchState(store, { error: error.message, isLoading: false });
          console.error('AuthStore: authenticateUserFailed', { error });
        },
      });
    },
  }))
);