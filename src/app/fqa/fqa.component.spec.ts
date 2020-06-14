import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { FqaComponent } from './fqa.component';
describe('FqaComponent', () => {
  let component: FqaComponent;
  let fixture: ComponentFixture<FqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
