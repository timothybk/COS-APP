import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N2ListComponent } from './n2-list.component';

describe('N2ListComponent', () => {
  let component: N2ListComponent;
  let fixture: ComponentFixture<N2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
