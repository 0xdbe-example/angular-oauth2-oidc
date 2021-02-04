import { TestBed } from '@angular/core/testing';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { OidcSecurityServiceStub } from './security/oidc-security-service-stub';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: OidcSecurityService, useClass: OidcSecurityServiceStub },
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

//   it(`should have as title 'angular-oauth2-oidc'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('angular-oauth2-oidc');
//   });

});
