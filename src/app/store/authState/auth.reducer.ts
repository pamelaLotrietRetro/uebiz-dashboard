import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '@store/authState/auth.actions';
import { authResponse } from '@models/auth.model';

export const authFeatureKey = 'authentication';

export interface AuthState {
  user: authResponse | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,

  on(AuthActions.authenticateUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),

  on(AuthActions.authenticateUserSuccess, (state, { response }) => ({
    ...state,
    user: response,
    isLoading: false,
    error: null,
  })),

  on(AuthActions.authenticateUserFailed, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
);
