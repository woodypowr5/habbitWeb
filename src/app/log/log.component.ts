import { Component, OnInit } from '@angular/core';
import { JSDocCommentStmt } from '@angular/compiler';
import { ActivityService } from '../shared/services/activity.service';
import { Activity } from '../shared/types/activity.model';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  private activities: Activity[] = [];
  private activeRecords: number[];
  private centerIndex = 3;

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.activitiesChanged.subscribe( activites => {
      this.activities = activites;
    });
    this.updateActiveRecords(this.centerIndex);
  }

  updateActiveRecords(index: number): void {
    let activeRecords: any[] = [];
    // (index >= 2 )? activeRecords.push(this.records[index - 2]): activeRecords.push(null);
    // (index >= 1 )? activeRecords.push(this.records[index - 1]): activeRecords.push(null);
    // (index >= 0 )? activeRecords.push(this.records[index]): activeRecords.push(null);
    // (index + 1 < this.records.length )? activeRecords.push(this.records[index + 1]): activeRecords.push(null);
    // (index + 2 < this.records.length )? activeRecords.push(this.records[index + 2]): activeRecords.push(null);
    // console.log(this.activeRecords);
    this.activeRecords = activeRecords;
  }
}
