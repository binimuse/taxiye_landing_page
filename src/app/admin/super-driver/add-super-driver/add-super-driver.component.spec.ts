import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperDriverComponent } from './add-super-driver.component';

describe('AddSuperDriverComponent', () => {
  let component: AddSuperDriverComponent;
  let fixture: ComponentFixture<AddSuperDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuperDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuperDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
