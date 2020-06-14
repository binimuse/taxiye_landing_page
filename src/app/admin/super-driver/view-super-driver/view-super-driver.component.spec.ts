import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSuperDriverComponent } from './view-super-driver.component';

describe('ViewSuperDriverComponent', () => {
  let component: ViewSuperDriverComponent;
  let fixture: ComponentFixture<ViewSuperDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSuperDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSuperDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
