import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Record } from '../../shared/types/record.model';
import { trigger } from '@angular/animations';
import { dateSliderTriggers } from './date-slider.triggers';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss'],
  animations: [
    trigger('slideLeft', dateSliderTriggers.slideLeft),
    trigger('slideRight', dateSliderTriggers.slideRight)
  ]
})
export class DateSliderComponent implements OnInit {
  @Input() activeMasterRecords: boolean[] = [];
  @Input() activeDate: Date;
  @Input() dateSelected: boolean;
  @Output() dateSelectedInteraction: EventEmitter<number> = new EventEmitter();
  @Output() indexChanged: EventEmitter<number> = new EventEmitter();
  private index = 3;
  private slideLeftActive = 'complete';
  private slideRightActive = 'complete';

  constructor() {}

  ngOnInit() {
    this.indexChanged.emit(this.index);
  }

  previousDay() {
      this.slideRightActive = 'inProgress';
      this.index--;
      this.indexChanged.emit(this.index);
  }

  nextDay() {
      this.slideLeftActive = 'inProgress';
      this.index++;
      this.indexChanged.emit(this.index);
  }

  slideDone(event) {
    this.slideLeftActive = 'complete';
    this.slideRightActive = 'complete';
  }

  computeCalendarDate(iteration: number): string {
    const newDate = new Date(this.activeDate);
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    newDate.setDate(this.activeDate.getDate() + iteration);
    return monthNames[newDate.getMonth()] + ' ' + newDate.getDate();
  }

  dateClicked(iteration: number): void {
    this.dateSelectedInteraction.emit(iteration);
    if (iteration < 0) {
      this.previousDay();
    } else if (iteration > 0) {
      this.nextDay();
    }
  }
}
