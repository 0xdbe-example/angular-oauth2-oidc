# Angular OAuth2 OIDC

This prototype use [angular-auth-oidc-client](https://www.npmjs.com/package/angular-auth-oidc-client).

# Install

- Setup an Authorization Server (such as Auth0)

- Configure a Client for PKCE grant flow

- Configure Angular in `src/environments/environment.dev.ts`:

```
export const environment = {
    production: false,
    api: {
      baseURL: 'http://localhost:3000'
    },
    oauth2: {
      clientId: '...',
      redirectURI: 'https://localhost:4200',
      issuerURI: '...',
    }
};
```

- Run test

```
ng test
```

- Run

```
ng serve \
    --disableHostCheck true \
    --ssl=true \
    --configuration dev
```

## Usage

- Open https://localhost:4200

- Click on login

- Enjoy! Your are authenticated
