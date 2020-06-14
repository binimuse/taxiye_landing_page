import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficesComponent } from './add-offices.component';

describe('AddOfficesComponent', () => {
  let component: AddOfficesComponent;
  let fixture: ComponentFixture<AddOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
