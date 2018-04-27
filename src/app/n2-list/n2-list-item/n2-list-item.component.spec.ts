import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N2ListItemComponent } from './n2-list-item.component';

describe('N2ListItemComponent', () => {
  let component: N2ListItemComponent;
  let fixture: ComponentFixture<N2ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N2ListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N2ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
