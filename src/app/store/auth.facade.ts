import { inject, Injectable } from '@angular/core';
import { AuthStore } from '@store/authState/auth.store';
import { authRequest } from '@shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly authStore = inject(AuthStore);

  sIsLoading = this.authStore.isLoading;
  sAuthUser = this.authStore.user;
  sAuthError = this.authStore.error;

  authenticateUser(user: authRequest): void {
    this.authStore.authenticateUser(user);
  }
}