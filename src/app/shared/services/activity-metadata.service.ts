import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityMetadata } from '../types/activityMetadata';
import { Activity } from '../types/activity.model';
import { Record } from '../types/record.model';
import { DataUtilityService } from './data-utility.service';
import { DateService } from './date.service';
import * as jStat from 'node_modules/jStat/dist/jstat.min.js';


@Injectable({
  providedIn: 'root'
})
export class ActivityMetadataService {
  
  constructor(private dataUtilityService: DataUtilityService, private dateService: DateService) {}

  computeMetadata(records: Record[]): ActivityMetadata {
    return <ActivityMetadata> {
      numDays: this.computeNumDays(records),
      numRecords: records.length,
      firstRecordDate: records[0].date,
      lastRecordDate: records[records.length - 1].date,
      standardDeviation: this.computeStandardDeviation(records),
      variability: this.computeVariability(records)
    }
  }

  computeNumDays(records: Record[]): number {
    return this.dateService.computeDaysBetween(records[0].date, records[records.length - 1].date) + 2;
  }

  computeStandardDeviation(records: Record[]): number {
   return jStat.stdev(records.map(record => record.value));
  }

  computeVariability(records: Record[]): number {
    console.log()
    return jStat.stdev(records.map(record => record.value)) / records.length;
  }
}
