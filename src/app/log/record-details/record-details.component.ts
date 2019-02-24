import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from '../../shared/types/record.model';
import { trigger } from '@angular/animations';
import { recordDetailTriggers } from './record-details.triggers';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss'],
  animations: [
    trigger('open', recordDetailTriggers.open)
  ]
})
export class RecordDetailsComponent implements OnInit {
  @Input() records: Record[] =  [];
  @Input() activeDate: Date;
  @Input() visible: boolean;
  @Output() closeRecordDetails: EventEmitter<null> = new EventEmitter();
  private dateFormatOptions: any = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeRecordDetails.emit(null);
  }
}
