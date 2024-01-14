import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authnewGuard } from './authnew.guard';

describe('authnewGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authnewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
