import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '@store/authState/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading,
);
export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user,
);
export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error,
);
