import { Component, OnInit } from '@angular/core';
import { JSDocCommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  private records: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private activeRecords: any[] = [null, null, null, null, null, null, null];

  constructor() { }

  ngOnInit() {
    this.updateActiveRecords(3)
  }

  updateActiveRecords(index: number): void {
    console.log(index);

    let activeRecords: any[] = [];
    
    (index > 2 )? activeRecords.push(this.records[index]): console.log("no");

    this.activeRecords = activeRecords;
  }
}
