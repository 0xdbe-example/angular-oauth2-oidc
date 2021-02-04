import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';
import { oauth2Config } from './security.config'
import { TokenInterceptor } from './security.interceptor';
import { environment } from '../../environments/environment';


@NgModule({
    imports: [
      HttpClientModule,
      AuthModule.forRoot()
    ],
    providers: [
      OidcConfigService,
      {
        provide: APP_INITIALIZER,
        useFactory: oauth2Config,
        deps: [OidcConfigService],
        multi: true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
    ]
  })

export class SecurityModule { }