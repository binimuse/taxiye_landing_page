import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateToSignupComponent } from './corporate-to-signup.component';

describe('CorporateToSignupComponent', () => {
  let component: CorporateToSignupComponent;
  let fixture: ComponentFixture<CorporateToSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateToSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateToSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
