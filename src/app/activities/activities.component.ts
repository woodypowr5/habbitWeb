import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/types/activity.model';
import { ActivityService } from '../shared/services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  private activities: Activity[] = [];

  constructor(private activityService: ActivityService) {
    this.activityService.activitiesChanged.subscribe( activities => {
      this.activities = activities;
    });
  }

  ngOnInit() {}
}
