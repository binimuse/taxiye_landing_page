import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorporatesComponent } from './add-corporates.component';

describe('AddCorporatesComponent', () => {
  let component: AddCorporatesComponent;
  let fixture: ComponentFixture<AddCorporatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCorporatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
