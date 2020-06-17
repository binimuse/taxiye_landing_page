import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicksampleComponent } from './slicksample.component';

describe('SlicksampleComponent', () => {
  let component: SlicksampleComponent;
  let fixture: ComponentFixture<SlicksampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicksampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicksampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
