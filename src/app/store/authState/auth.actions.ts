import { authRequest, authResponse } from '@app/shared/models/auth.model';
import { createActionGroup, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    authenticateUser: props<{ user: authRequest }>(),
    authenticateUserSuccess: props<{ response: authResponse }>(),
    authenticateUserFailed: props<{ error: string }>(),
  },
});
