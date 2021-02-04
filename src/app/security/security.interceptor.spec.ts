import { TestBed } from '@angular/core/testing';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { OidcSecurityServiceStub } from '../security/oidc-security-service-stub';

import { TokenInterceptor } from './security.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptor,
      { provide: OidcSecurityService, useClass: OidcSecurityServiceStub },
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
