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

  constructor(
    private dataUtilityService: DataUtilityService,
    private dateService: DateService
  ) {}

  computeMetadata(records: Record[]): ActivityMetadata {
    return {
      numDays: this.computeNumDays(records),
      numRecords: records.length,
      firstRecordDate: records[0].date,
      lastRecordDate: records[records.length - 1].date,
      standardDeviation: this.computeStandardDeviation(records)
    };
  }

  computeNumDays(records: Record[]): number {
    if (records.length === 0) {
      return 0;
    }
    const firstDay = new Date(
      records[0].date.getFullYear(),
      records[0].date.getMonth(),
      records[0].date.getDate()
    );
    const lastDay = new Date(
      records[records.length - 1].date.getFullYear(),
      records[records.length - 1].date.getMonth(),
      records[records.length - 1].date.getDate()
    );
    return this.dateService.computeDaysBetween(this.setToEndOfDay(firstDay), lastDay) + 1;
  }

  private setToEndOfDay(date: Date): Date {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(), 23, 59, 59);
  }

  computeStandardDeviation(records: Record[]): number {
    if (records.length <= 1) {
      return 0;
    }
    return jStat.stdev(records.map(record => record.value));
  }
}
