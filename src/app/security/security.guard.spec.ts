import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { OidcSecurityServiceStub } from '../security/oidc-security-service-stub';

import { AuthGuard } from './security.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: OidcSecurityService, useClass: OidcSecurityServiceStub },
      ],
      imports: [RouterModule.forRoot([])]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
