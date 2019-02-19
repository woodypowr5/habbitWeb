import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';
import { SwiperComponent } from 'angular2-useful-swiper';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss']
})
export class DateSliderComponent implements OnInit, AfterViewChecked {
  private slides = [
    1,2,3
  ]

  private config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
    // init: false
  };
  private initSwiper = false;

  constructor() { 
    
  }

  ngOnInit() {
   
  }

  ngAfterViewChecked() {
    setTimeout(() => { 
      
    });  
  }

  nextDay() {
    this.initSwiper = true;

  }
}
