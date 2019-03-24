import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../shared/services/activity.service';
import { Activity } from '../shared/types/activity.model';
import { Record } from '../shared/types/record.model';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  private index: number;
  private activities: Activity[] = [];
  private masterRecords: boolean[] = [false, false, false, false, false];
  private centerIndex = 3;
  private activeDate: Date = new Date();
  private dateSelected = false;
  private activeDateRecords: Record[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.activitiesChanged.subscribe( activites => {
      this.activities = activites;
    });
    this.updateActiveDate(this.centerIndex);
  }

  updateMasterRecords(index: number): void {
    [-2, -1, 0, 1, 2].map( iteration => {
      let date = new Date();
      const relativeDay = index - this.centerIndex;
      date.setDate(date.getDate() + iteration + relativeDay);
      this.masterRecords[iteration + 2] = this.activityService.recordExistsForDate(date);
    });
  }

  updateActiveDate(index: number): void {
    this.index = index;
    const relativeDay = this.centerIndex - index;
    let newActiveDate = new Date();
    newActiveDate.setDate(newActiveDate.getDate() - relativeDay);
    this.activeDate = newActiveDate;
    this.updateMasterRecords(index);
  }

  dateSelectedInteraction(iteration: number): void {
    this.dateSelected = true;
    this.updateActiveDate(this.index + iteration);
    this.activeDateRecords = this.activityService.getRecordsForDate(this.activeDate);
  }

  closeRecordDetails(): void {
    this.dateSelected = false;
  }
}
