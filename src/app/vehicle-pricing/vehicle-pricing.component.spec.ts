import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePricingComponent } from './vehicle-pricing.component';

describe('VehiclePricingComponent', () => {
  let component: VehiclePricingComponent;
  let fixture: ComponentFixture<VehiclePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
