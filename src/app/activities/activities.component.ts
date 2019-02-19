import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/types/activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  private activities: Activity[] = [];
  
  constructor() { }

  ngOnInit() {
  }
}
