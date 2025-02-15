import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ClerkAuthService } from '@services/clerk-auth/clerk-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(ClerkAuthService);
  const router = inject(Router);

  console.log('Current user in auth guard :', authService.getUserFromSignal);

  if (authService.getUserFromSignal === null) {
    router.navigateByUrl('/');
    alert("Log in to continue exploring...");
    return false;
  }

  return true;
};
