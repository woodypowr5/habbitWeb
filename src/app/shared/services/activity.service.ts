import { Injectable } from '@angular/core';
import { Activity } from '../types/activity.model';
import { MockData } from '../../_DATA/mockData';
import { BehaviorSubject } from 'rxjs';
import { DateService } from './date.service';
import { Record } from '../types/record.model';
import { ActivityMetadata } from '../types/activityMetadata';
import { ActivityMetadataService } from './activity-metadata.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[] = [];
  activitiesChanged: BehaviorSubject<Activity[]> = new BehaviorSubject([]);

  constructor(private dateService: DateService, private activityMetadataService: ActivityMetadataService) { 
    this.activitiesChanged.subscribe( activities => {
      this.activities = activities;
      this.computeActiviesMetadata(this.activities);
    });
    this.activitiesChanged.next(MockData.activities);
  }

  computeActiviesMetadata(activities: Activity[]) {
    activities.map( activity => {
      activity.metadata = this.activityMetadataService.computeMetadata(activity);
    });
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

  getRecordsForDate(date: Date): Record[] {
    const records: Record[] = [];
    this.activities.map( activity => {
      for (let index = 0; index < activity.records.length; index++) {
        const record = activity.records[index];
        if(this.dateService.areSameDates(date, record.date)){
          records.push(record);
          break;
        }
      } 
    });
    return records;
  }
}
