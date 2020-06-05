import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCorporatesComponent } from './view-corporates.component';

describe('ViewCorporatesComponent', () => {
  let component: ViewCorporatesComponent;
  let fixture: ComponentFixture<ViewCorporatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCorporatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
