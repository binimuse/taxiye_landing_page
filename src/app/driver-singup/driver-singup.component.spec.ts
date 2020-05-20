import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSingupComponent } from './driver-singup.component';

describe('DriverSingupComponent', () => {
  let component: DriverSingupComponent;
  let fixture: ComponentFixture<DriverSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
