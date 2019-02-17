import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInstanceComponent } from './activity-instance.component';

describe('ActivityInstanceComponent', () => {
  let component: ActivityInstanceComponent;
  let fixture: ComponentFixture<ActivityInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
