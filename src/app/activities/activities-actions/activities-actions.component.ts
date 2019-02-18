import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities-actions',
  templateUrl: './activities-actions.component.html',
  styleUrls: ['./activities-actions.component.scss']
})
export class ActivitiesActionsComponent implements OnInit {
  private choiceModalVisible = false;

  constructor() { }

  ngOnInit() {
  }

  activateChoiceModal() {
    this.choiceModalVisible = true;
  }

  deactivateChoiceModal() {
    this.choiceModalVisible = false;
  }

}
