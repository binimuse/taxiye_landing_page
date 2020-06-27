import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllViewNewsComponent } from './all-view-news.component';

describe('AllViewNewsComponent', () => {
  let component: AllViewNewsComponent;
  let fixture: ComponentFixture<AllViewNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllViewNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
