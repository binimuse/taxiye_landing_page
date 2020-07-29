import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniyalComponent } from './testimoniyal.component';

describe('TestimoniyalComponent', () => {
  let component: TestimoniyalComponent;
  let fixture: ComponentFixture<TestimoniyalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimoniyalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
