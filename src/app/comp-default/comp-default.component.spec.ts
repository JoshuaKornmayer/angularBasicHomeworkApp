import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDefaultComponent } from './comp-default.component';

describe('CompDefaultComponent', () => {
  let component: CompDefaultComponent;
  let fixture: ComponentFixture<CompDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
