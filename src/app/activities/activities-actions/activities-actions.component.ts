import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-actions',
  templateUrl: './activities-actions.component.html',
  styleUrls: ['./activities-actions.component.scss']
})
export class ActivitiesActionsComponent implements OnInit {
  private currentAction = 'add';

  constructor() { }

  ngOnInit() {
  }

  executeAction(argument: string): void {
    if (argument === 'favorites') {
      console.log('favs');
    } else if (argument === 'custom') {
      console.log('custom');
    } else if (argument === 'cancel') {
      this.currentAction = 'add';
    } else {
      this.currentAction === 'add' ? this.currentAction = 'choose' : this.currentAction = 'add';
    }
  }
}
