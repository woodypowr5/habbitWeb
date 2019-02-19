import { Injectable } from '@angular/core';
import { Activity } from '../types/activity.model';
import { MockData } from '../../_DATA/mockData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[] = MockData.activities;
  activitiesChanged: BehaviorSubject<Activity[]> = new BehaviorSubject([]);

  constructor() { 
    this.activitiesChanged.subscribe( activities => {
      this.activities = activities;
    });
    this.activitiesChanged.next(this.activities);
  }
}
