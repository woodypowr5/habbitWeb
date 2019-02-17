import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity-instance',
  templateUrl: './activity-instance.component.html',
  styleUrls: ['./activity-instance.component.scss']
})
export class ActivityInstanceComponent implements OnInit {
  @Input() name = '';
  @Input() description = '';

  constructor() { }

  ngOnInit() {
  }

}
