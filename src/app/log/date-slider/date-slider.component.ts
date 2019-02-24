import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Record } from '../../shared/types/record.model';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { dateSliderTriggers } from './date-slider.triggers';

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
  @Input() activeRecords: any[] = [];
  @Input() activeDate: Date;
  @Output() indexChanged: EventEmitter<number> = new EventEmitter();
  private index = 3;
  private slideLeftActive = 'complete';
  private slideRightActive = 'complete'; 

  constructor() { 
    
  }

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
    let newDate = new Date(this.activeDate);
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ]
    
    newDate.setDate(this.activeDate.getDate() + iteration);
    
    return monthNames[newDate.getMonth()] + ' ' + newDate.getDate();
  }
}
