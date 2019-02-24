import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../../shared/types/record.model';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {
  @Input() records: Record[] =  [];

  constructor() { }

  ngOnInit() {
  }
}
