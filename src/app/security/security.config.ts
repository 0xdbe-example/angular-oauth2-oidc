
import { LogLevel, OidcConfigService } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

export function oauth2Config(oidcConfigService: OidcConfigService) {
    return () =>
      oidcConfigService.withConfig({
          stsServer: environment.oauth2.issuerURI,
          redirectUrl: environment.oauth2.redirectURI,
          clientId: environment.oauth2.clientId ,
          scope: 'openid email',
          responseType: 'code',
          silentRenew: false,
          logLevel: LogLevel.Debug,
      });
}