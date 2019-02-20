import { Component, OnInit } from '@angular/core';
import { JSDocCommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  private records: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private activeRecords: number[];
  constructor() { }

  ngOnInit() {
    this.updateActiveRecords(3);
  }

  updateActiveRecords(index: number): void {
    let activeRecords: any[] = [];
    
    (index >= 2 )? activeRecords.push(this.records[index - 2]): activeRecords.push(null);
    (index >= 1 )? activeRecords.push(this.records[index - 1]): activeRecords.push(null);
    (index >= 0 )? activeRecords.push(this.records[index]): activeRecords.push(null);
    (index + 1 < this.records.length )? activeRecords.push(this.records[index + 1]): activeRecords.push(null);
    (index + 2 < this.records.length )? activeRecords.push(this.records[index + 2]): activeRecords.push(null);
    
    this.activeRecords = activeRecords;
  }
}
