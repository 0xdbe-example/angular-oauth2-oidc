import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OidcSecurityService } from 'angular-auth-oidc-client';
import { OidcSecurityServiceStub } from '../../security/oidc-security-service-stub';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: OidcSecurityService, useClass: OidcSecurityServiceStub },
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
