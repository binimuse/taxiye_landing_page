import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiyeNewsComponent } from './taxiye-news.component';

describe('TaxiyeNewsComponent', () => {
  let component: TaxiyeNewsComponent;
  let fixture: ComponentFixture<TaxiyeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxiyeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiyeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
