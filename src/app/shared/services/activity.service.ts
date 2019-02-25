import { Injectable } from '@angular/core';
import { Activity } from '../types/activity.model';
import { MockData } from '../../_DATA/mockData';
import { BehaviorSubject } from 'rxjs';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[] = [];
  activitiesChanged: BehaviorSubject<Activity[]> = new BehaviorSubject([]);

  constructor(private dateService: DateService) { 
    this.activitiesChanged.subscribe( activities => {
      this.activities = activities;
    });
    this.activitiesChanged.next(MockData.activities);
  }

  recordExistsForDate(date: Date): boolean {
    for (let i = 0; i < this.activities.length; i++) {
      const activity = this.activities[i];
      for (let j = 0; j < activity.records.length; j++) {
        const record = activity.records[j];
        if(this.dateService.areSameDates(date, record.date)){
          return true;
        }
      } 
    }
    return false;
  }
}
