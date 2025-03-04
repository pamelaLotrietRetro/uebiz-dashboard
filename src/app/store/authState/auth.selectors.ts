import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@store/authState/auth.reducer';

const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthLoading = createSelector(selectAuthState, (state) => state.isLoading);
export const selectAuthUser = createSelector(selectAuthState, (state) => state.user);
export const selectAuthError = createSelector(selectAuthState, (state) => state.error);
