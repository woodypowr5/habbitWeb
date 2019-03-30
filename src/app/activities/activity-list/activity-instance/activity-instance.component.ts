import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../../shared/types/activity.model';

@Component({
  selector: 'app-activity-instance',
  templateUrl: './activity-instance.component.html',
  styleUrls: ['./activity-instance.component.scss']
})
export class ActivityInstanceComponent implements OnInit {
  @Input() activity: Activity;

  constructor() { }

  ngOnInit() {
  }

}
