import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Record } from '../../shared/types/record.model';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('inProgress', style({
        transform: 'translateX(100%)'
      })),
      state('complete', style({
       
      })),
      transition('inProgress => complete', [
        animate(200)
      ])
    ]),
    trigger('slideRight', [
      state('inProgress', style({
        transform: 'translateX(-100%)'
      })),
      state('complete', style({
        
      })),
      transition('inProgress => complete', [
        animate(200)
      ])
    ])
  ]
})
export class DateSliderComponent implements OnInit {
  @Input() activeRecords: any[] = [];
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
}
