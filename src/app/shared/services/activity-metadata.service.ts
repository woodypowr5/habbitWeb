import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityMetadata } from '../types/activityMetadata';
import { Activity } from '../types/activity.model';
import { Record } from '../types/record.model';
import { DataUtilityService } from './data-utility.service';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class ActivityMetadataService {
  
  constructor(private dataUtilityService: DataUtilityService, private dateService: DateService) {}

  computeMetadata(records: Record[]): ActivityMetadata {
    return <ActivityMetadata> {
      numDays: this.computeNumDays(records),
      numRecords: records.length,
      firstRecordDate: new Date(),
      lastRecordDate: new Date(),
      standardDeviation: this.computeStandardDeviation(records),
      variablility: this.computeVariability(records)
    }
  }

  computeNumDays(records: Record[]): number {
    return this.dateService.computeDaysBetween(records[0].date, records[records.length - 1].date) + 2;
  }

  computeFirstRecordDate(records: Record[]): Date {
    return new Date();
  }

  computeLastRecordDate(records: Record[]): Date {
    return new Date();
  }

  computeStandardDeviation(records: Record[]): number {
    return 1;
  }

  computeVariability(records: Record[]): number {
    return 4;
  }
}
