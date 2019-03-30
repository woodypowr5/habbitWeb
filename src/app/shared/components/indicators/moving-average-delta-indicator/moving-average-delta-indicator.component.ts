import { Component, OnInit } from '@angular/core';
import { IndicatorComponent } from '../indicator/indicator.component';

@Component({
  selector: 'app-moving-average-delta-indicator',
  templateUrl: './moving-average-delta-indicator.component.html',
  styleUrls: ['./moving-average-delta-indicator.component.scss']
})
export class MovingAverageDeltaIndicatorComponent 
  extends IndicatorComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
