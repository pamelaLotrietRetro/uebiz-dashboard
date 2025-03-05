import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { inject, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { authRequest, authResponse } from '@models/auth.model';
import { AuthActions } from '@store/authState/auth.actions';

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
  withComputed(({ user }) => ({
    isAuthenticated: computed(() => !!user()),
  })),
  withMethods((store, storeService = inject(Store)) => ({
    authenticateUser(user: authRequest) {
      patchState(store, { isLoading: true, error: null });
      storeService.dispatch(AuthActions.authenticateUser({ user }));
    },
    setUser(response: authResponse) {
      patchState(store, { user: response, isLoading: false });
    },
    setError(error: string) {
      patchState(store, { error, isLoading: false });
    },
  }))
);