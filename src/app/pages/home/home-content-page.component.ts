import { Component, OnInit } from '@angular/core';
import { ContentPageComponent } from '../content-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content-page',
  templateUrl: './home-content-page.component.html',
  styleUrls: ['./home-content-page.component.scss']
})

export class HomeComponent 

  extends ContentPageComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}
}