import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityMetadata } from '../types/activityMetadata';
import { Activity } from '../types/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityMetadataService {
  
  constructor() {}

  computeMetadata(activity: Activity): ActivityMetadata {
    return <ActivityMetadata> {
      numDays: this.computeNumDays(activity),
      numRecords: this.computeNumRecords(activity),
      firstRecordDate: new Date(),
      lastRecordDate: new Date(),
      standardDeviation: this.computeStandardDeviation(activity),
      variablility: this.computeVariability(activity)
    }
  }

  computeNumDays(activity: Activity): number {
    return 3;
  }

  computeNumRecords(activity: Activity): number {
    return 2;
  }

  computeFirstRecordDate(activity: Activity): Date {
    return new Date();
  }

  computeLastRecordDate(activity: Activity): Date {
    return new Date();
  }

  computeStandardDeviation(activity: Activity): number {
    return 1;
  }

  computeVariability(activity: Activity): number {
    return 4;
  }
}
