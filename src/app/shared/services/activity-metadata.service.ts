import { Injectable } from '@angular/core';
import { ActivityMetadata } from '../types/activityMetadata';
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
      standardDeviation: this.computeStandardDeviation(records),
      weeklyAverageDelta: this.computeWeeklyAverageDelta(records),
      globalAverage: this.computeGlobalAverage(records),
      longestRecordStreak: this.computeLongestRecordStreak(records),
      currentRecordStreak: this.computeCurrentRecordStreak(records)
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
    return this.dateService.computeDaysBetween(
      this.dateService.setToEndOfDay(firstDay), 
      this.dateService.setToStartOfDay(lastDay)
    ) + 1;
  }

  computeGlobalAverage(records: Record[]): number {
    if (records.length === 0) {
      return null;
    }
    return jStat.mean(records.map(record => record.value));
  }

  computeWeeklyAverageDelta(records: Record[]): number { // need tests
    const today =  this.dateService.setToStartOfDay(new Date());
    return 5;
}

  computeStandardDeviation(records: Record[]): number {
    if (records.length <= 1) {
      return 0;
    }
    return jStat.stdev(records.map(record => record.value));
  }

  
  computeCurrentRecordStreak(records: Record[]): number { // need tests
    let streak = 0;

    for (let index = 0; index < records.length; index++) {
      const currentRecord: Record = records[index];

      
    }  

    return streak;
  }

  computeLongestRecordStreak(records: Record[]): number {
    let currentStreak = 0;
    let longestStreak = 0;
    for (let index = 0; index < records.length; index++) {
      let prevRecord = null;
      const currentRecord: Record = records[index];
      if (index === 0) {
        currentStreak ++;
        longestStreak ++;
      } else {
        prevRecord = records[index - 1];
        if (this.dateService.isNextDay(currentRecord.date, prevRecord.date)) {
          currentStreak ++;
          if (currentStreak > longestStreak) {
            longestStreak ++;
          }
        } else {
          currentStreak = 0;
        }
      }
    }
    return longestStreak;
  }
}
