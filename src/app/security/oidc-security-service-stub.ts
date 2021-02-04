import { AuthOptions } from 'angular-auth-oidc-client/lib/login/auth-options';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';

export class OidcSecurityServiceStub {
  getToken(): string {
    return 'fake_token';
  }

  checkAuth(): Observable<boolean> {
    return of(true);
  }

  // Mock all methods used in oidcSecurityService
  authorize(authOptions?: AuthOptions) {
    /*if (authOptions) {
      return authOptions.urlHandler('http://localhost:4200');
    } else {*/
    return null;
    //}
  }
}
