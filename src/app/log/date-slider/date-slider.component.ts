import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { Record } from '../../shared/types/record.model';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss'],
  animations: [
    trigger('slideLeft', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class DateSliderComponent implements OnInit {
  @Input() activeRecords: any[] = [];
  @Output() indexChanged: EventEmitter<number> = new EventEmitter();
  private index = 4;

  constructor() { 
    
  }

  ngOnInit() {
    this.indexChanged.emit(this.index);
  }

  swiperEngaged(index: number) {
    this.indexChanged.emit(this.index);
  }
}
