import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.oidcSecurityService.isAuthenticated$.pipe(
        map((isAuthorized: boolean) => {
            console.log('AuthorizationGuard, canActivate isAuthorized: ' + isAuthorized);

            if (!isAuthorized) {
                this.router.navigate(['/login']);
                return false;
            }

            return true;
        })
      );
  }
  
}
