import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsActivitiesListComponent } from './goals-activities-list.component';

describe('GoalsActivitiesListComponent', () => {
  let component: GoalsActivitiesListComponent;
  let fixture: ComponentFixture<GoalsActivitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsActivitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsActivitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
