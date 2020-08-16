import { Component } from '@angular/core';

import { activities } from './activity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activities = activities;
  totalBlocks = 144;
  blocks = [];
  busyBlocks = 0;

  constructor() {
    this.blocks = Array(this.totalBlocks).fill(0).map((x,i)=>i);
    this.busyBlocks = this.activities.reduce(
      (accumulator, activity) => {
        return accumulator + activity.blocksCount;
      }, 0
    )
  }
}
