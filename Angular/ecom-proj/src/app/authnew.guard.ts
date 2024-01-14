import { CanActivateFn } from '@angular/router';

export const authnewGuard: CanActivateFn = (route, state) => {
  return true;
};
