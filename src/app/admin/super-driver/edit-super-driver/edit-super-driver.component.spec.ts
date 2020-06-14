import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuperDriverComponent } from './edit-super-driver.component';

describe('EditSuperDriverComponent', () => {
  let component: EditSuperDriverComponent;
  let fixture: ComponentFixture<EditSuperDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSuperDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuperDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
